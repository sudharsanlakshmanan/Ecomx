import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Components.js/Home'
import Products from './Components.js/Products'
import Navbar from './ReusableComponents/Navbar'
import CartProvider from './Context/CartProvider'
import CartDetails from './Components.js/CartDetails'
import Footer from './ReusableComponents/Footer'
import ProductDetails from './Components.js/ProductDetails'
import SearchProvider from './Context/SearchProvider'
import { AuthProvider } from './Context/AuthProvider.jsx';
import Login from './Components.js/Login'
import Register from './Components.js/Register'

function App() {


  return(
    <AuthProvider>
    <CartProvider>
      <SearchProvider>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/Products" element={<Products />}>Products</Route>
      <Route path="/Products/:id" element={<ProductDetails />}>ProductDetails</Route>
      <Route path="/Cart" element={<CartDetails />}>Cart Details</Route>
      <Route path="/Login" element={<Login />}>Login</Route>
      <Route path="/Register" element={<Register />}>Register</Route>
    </Routes>
    <Footer />
    </SearchProvider>
    </CartProvider>
    </AuthProvider>
  )
}

export default App
