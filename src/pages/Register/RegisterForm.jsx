import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./RegisterForm.css";

import useAuth from "../../hooks/useAuth";
import { API_BASE_URL } from "../../utils/constants";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAuthenticated, loginUser } = useAuth();
  const navigate = useNavigate();

  const register = async (user) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.ok) {
      if (data?.user) {
        data.data = {
          id: data.user.id,
          email: data.user.email,
          username: data.user.username,
          role: data.user.role,
        };
      }

      return {
        user: {
          id: data.data.id,
          email: data.data.email,
          username: data.data.username,
          role: data.data.role,
        },
        token: data.accessToken,
      };
    } else {
      throw new Error("Credenciales inválidas");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !username || !password || !confirmPassword) {
      window.alert("Todos los campos son obligatorios");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      window.alert("Por favor, introduce un correo electrónico válido");
      return;
    }

    if (username.length < 6) {
      window.alert("El nombre de usuario debe tener al menos 6 caracteres");
      return;
    }

    if (password.length < 6) {
      window.alert("El password del usuario debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      window.alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Formulario enviado");
    try {
      // Crear el objeto user que se grabará en la BD
      const user = {
        username: username,
        email: email,
        password: password,
        role: "User",
        enabled: true,
      };

      const userData = await register(user);

      loginUser(userData);
      Swal.fire({
        icon: "success",
        title: "Registro",
        text: "¡ Se he registrado correctamente !",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: `url('images/bg-01.jpg')` }}
      >
        <h2 className="ltext-105 cl0 txt-center">Regístrate</h2>
      </section>

      <div className="wrapper">
        <p>
          ¿Tienes cuenta?{" "}
          <Link to="/login" className="register-style">
            Iniciar sesión
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <div className="input-box">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nombre"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <label>Email</label>
          <div className="input-box">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <label>Confirma tu email</label>
          <div className="input-box">
            <input
              id="confirmEmail"
              type="email"
              placeholder="Confirma tu email"
              required
            />
          </div> */}
          <label>Elige tu contraseña</label>
          <div className="input-box">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Elige tu contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <label>Confirma tu contraseña</label>
          <div className="input-box">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirma tu contraseña"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="m-b-30 flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer"
          >
            Registrarme
          </button>
          {/* <div className="register-link"></div> */}
        </form>
      </div>
    </>
  );
};

export default RegisterForm;

/*
 * useState: This hook is used to define state variables in the component. 
 * In this case, it's used to manage the state of the input fields in the registration form,
 * such as username, email, password, etc.
 * useEffect: This hook is used to perform side effects in the component, such as checking user
 * authentication or redirecting them after registering. In this case, it's used to check if the user
 * is already authenticated and redirect them to the home page if so.
 * The RegisterForm component is responsible for displaying a registration form for users to sign up on the website.
 * (register): This function is responsible for sending a request to the server to register a new user.
 * If the request is successful, it returns the user information and access token. In case of an error,
 * it throws an exception with the message "Invalid credentials".
 * (useEffect): This effect runs when the component mounts and checks if the user is already authenticated. 
 * If so, it redirects the user to the home page.
 * (handleSubmit): This function is triggered when the user submits the registration form. 
 * It performs various validation checks on the input fields (such as if they are empty, if the email is valid, etc.).
 * Then, it creates a user object with the information entered by the user and sends it to the server for registration.
 * If the registration is successful, it displays a success message using Swal (SweetAlert2) and redirects the user to the home page.
 * The component renders a form with input fields for the user to enter their username, email, password, and confirm password.
 *  It also includes a link to log in if the user already has an account.
 */
