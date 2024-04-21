import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <Link to="/login" className="header-btn login-btn">
      Login
    </Link>
  );
};

export default Login;
