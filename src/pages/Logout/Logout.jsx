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

  /*
   * This component is responsible for logging the user out and redirecting 
   * them to the home page. Its primary function is to handle the logout process
   * and provide the user with a farewell message.
   * 1.-Logout and Redirect:
   * It uses the useAuth hook to access the authentication state and the logoutUser 
   * function to log the user out.
   * It utilizes the useNavigate hook to access the navigation function.
   * The useEffect function is used to execute code after the component is mounted.
   * In this case, it checks if the user is authenticated.
   * If the user is authenticated, logoutUser is called to log the user out.
   * If the user is not authenticated, the user is redirected to the home page using navigate('/').
   * The effect's dependency is left empty [], meaning the effect will run only once after the component is mounted.
   * 2.- Farewell Message:
   * Within the component, a farewell message is displayed thanking the user for their visit and saying "Goodbye...".
   * A link is provided allowing the user to return to the home page.
   */