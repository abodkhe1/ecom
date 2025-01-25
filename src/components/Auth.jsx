import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ isLogin, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="auth-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="auth-input"
        />
        <button type="submit" className="auth-button">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Auth;