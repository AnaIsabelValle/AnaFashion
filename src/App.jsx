import { useState } from 'react'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
//import BackToTopButton from './components/BackToTopButton/BackToTopButton'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Cart />
      <Product />
      <Footer />
      {/* <BackToTopButton /> */}
      
    </>
  )
}

export default App
