import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginForm from "./pages/LoginForm/LoginForm";
import RegisterForm from "./pages/Register/RegisterForm";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import "./css/util.css";
import "./css/main.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
