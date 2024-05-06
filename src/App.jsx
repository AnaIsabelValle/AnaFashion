import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/LoginForm/LoginForm";
import RegisterForm from "./pages/Register/RegisterForm";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Checkout from "./pages/Checkout/Checkout";
import PayPal from "./pages/PayPal/PayPal";
import FinalPage from "./pages/FinalPage/FinalPage";
import "./css/util.css";
import "./css/main.css";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paypal" element={<PayPal />} />
        <Route path="/finalpage" element={<FinalPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
