import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 
import './Navbar.css'; 

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">E-Commerce</Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <button className="navbar-button" onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="navbar-button">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="navbar-button">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;