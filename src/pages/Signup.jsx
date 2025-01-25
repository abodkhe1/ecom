import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Auth from '../components/Auth';
import { useAuth } from '../AuthContext';
import { auth } from '../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 

const Signup = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleSignup = async (email, password) => {
    try {

      await createUserWithEmailAndPassword(auth, email, password);
      login(); 
      alert('Signup successful!'); 
      navigate('/login'); 
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed: ' + error.message); 
    }
  };

  return (
    <Auth isLogin={false} onLogin={handleSignup} />
  );
};

export default Signup;
