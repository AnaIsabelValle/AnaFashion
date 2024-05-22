import React, { useState,  useEffect } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate, } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { API_BASE_URL } from "../../utils/constants";


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

  const login = async () => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        user: {
          id: data.user.id,
          email: data.user.email,
          username: data.user.username,
          role: data.user.role,
        },
        token: data.accessToken,
      };
    } else {
      throw new Error("Email o password incorrecto");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que el correo electrónico sea válido
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, introduce un correo electrónico válido");
      return;
    }

    try {
      const userData = await login(email, password);
      loginUser(userData);
      navigate("/");
    } catch (error) {
      setError(error.message);
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

/*
 * This LoginForm component is responsible for displaying a login form.
 * When the form is submitted, validation is performed on the email and password.
 * If validation is successful, a request is sent to the server to log in using the provided email and password.
 * If the login is successful, the user data and access token are stored in the authentication context using 
 * the loginUser function of the useAuth hook.
 * If there is an error during login, an appropriate error message is displayed.
 * The component also provides a link to register if the user doesn't have an account.
 * Additionally, it displays a background image and a "Acceso" title at the top, providing an attractive
 *  visual interface for the login form.
 */
