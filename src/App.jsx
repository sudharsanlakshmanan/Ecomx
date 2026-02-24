import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Components.js/Home'
import Products from './Components.js/Products'
import Navbar from './ReusableComponents/Navbar'
import CartProvider from './Context/CartProvider'
import CartDetails from './Components.js/CartDetails'
import Footer from './ReusableComponents/Footer'
import ProductDetails from './Components.js/ProductDetails'

function App() {


  return(
    <CartProvider>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/Products" element={<Products />}>Products</Route>
      <Route path="/Products/:id" element={<ProductDetails />}>ProductDetails</Route>
      <Route path="/Cart" element={<CartDetails />}>Cart Details</Route>
    </Routes>
    <Footer />
    </CartProvider>
  )
}

export default App
