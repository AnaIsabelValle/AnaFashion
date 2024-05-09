import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


// const LoginForm = () => {

export const LoginForm = ({ datos, setDatos }) => {

  const initUser = {
    username: datos ? datos.username : '',
    email: datos ? datos.email : '',
  };
  const [form, setFormState] = useState(initUser);
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {

    setFormState({
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  /* const handleSubmit = (e) => {
    e.preventDefault();
    setDatos(form)
    setFormState({
      username: '',
      email: ''
    })
  } */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (setDatos !== undefined && typeof setDatos === 'function') {
      setDatos(form);
    }
    setFormState({
      username: '',
      email: ''
    });
  };
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
    
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!validateEmail(email)) {
      alert('Por favor, introduzca un correo electrónico válido.');
    } else {
      setEmailError('');
    }
    handleInputChange(e);
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
          <label>Nombre</label>
          <div className='input-box'>
            <input type='text' name='username' placeholder='Nombre' value={form.username}
              onChange={handleInputChange} required />
            <FaUser className='icon' />
          </div>
          <label>Email</label>
          <div className='input-box'>
            <input type='email' name='email' placeholder='Email' value={form.email} onChange={handleEmailChange} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required />
            {/* <input type='email' name='email' placeholder='Email' value={form.email} 
            onChange={handleInputChange} required />*/}
            <MdEmail className='icon' />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className='remember-forgot'>
            {/* <label><input type="checkbox" />Acuérdate de mí</label> */}
          </div>
          <button type='submit'>Iniciar Sesión</button>
          <p></p>
          <div className='register-link'>
            <p>¿No tiene cuenta? <Link className='register-style' to="/register">Regístrese</Link></p>
            <Link>¿ Ha olvidado su contraseña ?</Link>
          </div>
        </form>
      </div>

    </>
  )
}

export default LoginForm;
