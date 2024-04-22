import React from 'react';
import './RegisterForm.css';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <>
            <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url('images/bg-01.jpg')` }}>
                <h2 className="ltext-105 cl0 txt-center">
                    Regístrate
                </h2>
            </section>

            <div className='wrapper'>
                <p>¿Tienes cuenta? <Link to="/login" className='register-style'>Iniciar sesión</Link></p>
                <form action=''>
                    <label>Nombre</label>
                    <div className='input-box'>
                        <input id='name' type='text' placeholder='Nombre' required />
                    </div>
                    <label>Email</label>
                    <div className='input-box'>
                        <input id='email' type='email' placeholder='Email' required />
                    </div>
                    <label>Confirma tu email</label>
                    <div className='input-box'>
                        <input id='confirmEmail' type='email' placeholder='Confirma tu email' required />
                    </div>
                    <label>Elige tu contraseña</label>
                    <div className='input-box'>
                        <input id='password' type='password' placeholder='Elige tu contraseña' required />
                    </div>
                    <label>Confirma tu contraseña</label>
                    <div className='input-box'>
                        <input id='confirmPassword' type='password' placeholder='Confirma tu contraseña' required />
                    </div>
                    <button type='submit'>Registrarme</button>
                    <div className='register-link'>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;
