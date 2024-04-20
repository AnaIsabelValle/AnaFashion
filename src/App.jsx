import Header from './components/Header/Header'
import Product from './components/Product/ProductList'
import Footer from './components/Footer/Footer'
import './App.css'
import './css/util.css'
import './css/main.css'
//import Cart from './components/Cart/Cart'
//import BackToTopButton from './components/BackToTopButton/BackToTopButton'

import './App.css'
import ProductList from './components/Product/ProductList'

function App() {
  
  return (
    <>
      <Header />
      {/* <Cart /> */}
      <Product />
      <Footer />
      {/* <BackToTopButton /> */}
      
    </>
  )
}

export default App
