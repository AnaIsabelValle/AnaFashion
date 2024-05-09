import React, { useState, useNavigate, useEffect } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { loginUser, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que el correo electrónico sea válido
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, introduce un correo electrónico válido");
      return;
    }
    
  };

  



  return (
    <>
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url('images/bg-01.jpg')` }}>
        <h2 className="ltext-105 cl0 txt-center">
          Acceso
        </h2>
      </section>
      <div className='wrapper-login'>
        <form onSubmit={handleSubmit}>

          {error && (
            <div
              style={{
                color: "red",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}
          <div className='input-box'>
            <input type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <MdEmail className='icon' />

          </div>

          <div className='input-box'>
            <input type='password' name='password' placeholder='Password' value={password}
              onChange={(e) => setPassword(e.target.value)} required />
            <FaUser className='icon' />
          </div>
          <button type='submit'>Iniciar Sesión</button>
          <div className='register-link'>
            <p>¿No tiene cuenta? <Link className='register-style' to="/register">Regístrese</Link></p>
          </div>
        </form>
      </div>

    </>
  )
}

export default LoginForm;
