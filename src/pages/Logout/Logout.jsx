import React, { useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Logout = () => {
    const { isAuthenticated, logoutUser } = useAuth();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (isAuthenticated) {
        logoutUser();
      } else {
        navigate('/');
      }
    }, []);
  
    return (
      <>
        <section className="bg0 p-t-50 p-b-116">
          <div className="container">
            <div className="flex-w flex-tr flex-c">
              <div className="m-b-20">
                <h1 className="mtext-105 cl2 txt-center p-b-30">
                Gracias por su visita <br />
                Adiós...
                </h1>
                <Link
                  to="/"
                  className="m-b-30 flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer"
                >
                  Ir a Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Logout;