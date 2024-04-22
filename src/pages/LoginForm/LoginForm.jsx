import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url('images/bg-01.jpg')` }}>
        <h2 className="ltext-105 cl0 txt-center">
          Acceso
        </h2>
      </section>
      <div className='wrapper'>
        <form action=''>
          <label>Nombre</label>
          <div className='input-box'>
            <input type='text' placeholder='Nombre' required />
            <FaUser className='icon' />
          </div>
          <label>Email</label>
          <div className='input-box'>
            <input type='email' placeholder='Email' required />
            <MdEmail className='icon' />
          </div>
          <div className='remember-forgot'>
            {/* <label><input type="checkbox" />Remember me</label> */}
          </div>
          <button type='submit'>Iniciar Sesión</button>
          <p></p>
          <div className='register-link'>
            <p>¿No tiene cuenta? <Link className='register-style'to="/register">Regístrese</Link></p>
            <a href="#">¿ Ha olvidado su contraseña ?</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm;
