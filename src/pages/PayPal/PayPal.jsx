
import React, { useState} from 'react';
import { FaPaypal } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import './PayPal.css';


const PayPal = () => {

  const [email, setEmail] = useState("");
  const { user } = useAuth();

  const navigate = useNavigate();

  const confirmPayPal = (event) => {
    event.preventDefault();

    if (user.email === email) {
      navigate("/checkout", { state: { paypalOK: true } });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "¡ Credenciales incorrectas !",
      });
    }
  };

  return (
    <>
      <div className='wrapper'>
        <FaPaypal className='paypal' />
        <form onSubmit={confirmPaypal}>
          <h1>Pagar con PayPal</h1>
          <p>Para comenzar, introduce tu correo electrónico</p>
          <div className='input-box'>
            <input id='name' type='email' placeholder='Correo electrónico o número de móvil' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>¿Has olvidado tu correo electrónico?</label>
          </div>
          <button className='pagar blue' type='submit'>Pagar</button>
          <Link to="/checkout" className="cancelar"></Link>
        </form >
      </div>
    </>
  );
}

export default PayPal;