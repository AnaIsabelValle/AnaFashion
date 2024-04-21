import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <h2>Register Page</h2>
      <Link to="/login" className="header-btn" style={{ color: "#8D8263", backgroundColor: "#FFD700" }}>
        Login
      </Link>
    </div>
  );
};

export default Register;
