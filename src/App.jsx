
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import $ from "jquery";
import "./css/util.css";
import "./css/main.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/LoginForm/LoginForm";
import Logout from "./pages/Logout/Logout";
import RegisterForm from "./pages/Register/RegisterForm";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Checkout from "./pages/Checkout/Checkout";
import PayPal from "./pages/PayPal/PayPal";
import FinalPage from "./pages/FinalPage/FinalPage";
import Orders from "./pages/Orders/Orders";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import Profile from "./pages/Profile/Profile";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";


function App() {

  useEffect(() => {
    /* ==================================================================
    [ Menu mobile ] */
    $(".btn-show-menu-mobile").on("click", function () {
      $(this).toggleClass("is-active");
      $(".menu-mobile").slideToggle();
    });
    let arrowMainMenu = $(".arrow-main-menu-m");

    for (let i = 0; i < arrowMainMenu.length; i++) {
      $(arrowMainMenu[i]).on("click", function () {
        $(this).parent().find(".sub-menu-m").slideToggle();
        $(this).toggleClass("turn-arrow-main-menu-m");
      });
    }

    $(window).on("resize", function () {
      if ($(window).width() >= 992) {
        if ($(".menu-mobile").css("display") == "block") {
          $(".menu-mobile").css("display", "none");
          $(".btn-show-menu-mobile").toggleClass("is-active");
        }

        $(".sub-menu-m").each(function () {
          if ($(this).css("display") == "block") {
            console.log("hello");
            $(this).css("display", "none");
            $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
          }
        });
      }
    });
  }, []);

  return (
    <React.StrictMode>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              <Route path="/paypal" element={<ProtectedRoute><PayPal /></ProtectedRoute>} />
              <Route path="/finalpage" element={<ProtectedRoute><FinalPage /> </ProtectedRoute>} />
              <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
              <Route path="/orders/:id" element={<ProtectedRoute><OrderDetail /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </AuthProvider >
    </React.StrictMode>
  );
}

export default App;
