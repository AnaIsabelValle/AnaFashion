
import React from 'react';
import { FaPaypal } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import './PayPal.css';


const PayPal = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='wrapper'>
        <FaPaypal className='paypal' />
        <form action=''>
          <h1>Pagar con PayPal</h1>
          <p>Para comenzar, introduce tu correo electrónico</p>
          <div className='input-box'>
            <input id='name' type='text' placeholder='Correo electrónico o número de móvil' required />
            <label>¿Has olvidado tu correo electrónico?</label>
          </div>
          <Link ><button className='pagar' type='submit' onClick={() => navigate("/finalpagel")} >Pagar</button> </Link>
        </form >
      </div>

    </>
  );
}

export default PayPal;