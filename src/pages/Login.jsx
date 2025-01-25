import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Auth from '../components/Auth';
import { useAuth } from '../AuthContext'; 
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 

const Login = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      login(); 
      alert('Login successful!'); 
      navigate('/'); 
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed: ' + error.message); 
    }
  };

  return (
    <div>
      <Auth isLogin={true} onLogin={handleLogin} />
    </div>
  );
};

export default Login;
