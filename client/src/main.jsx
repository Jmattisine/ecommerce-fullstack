import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Product from './pages/Product.jsx'
import Profile from './pages/Profile.jsx'
import Checkout from './pages/Checkout.jsx'
import { UserProvider, useUser } from './state/UserContext.jsx'
import { CartProvider } from './state/CartContext.jsx'
import NavBar from './components/NavBar.jsx'
import './styles/theme.css'

function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/profile" element={<Private><Profile /></Private>} />
          <Route path="/checkout" element={<Private><Checkout /></Private>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

function Private({ children }) {
  const { user } = useUser()
  return user ? children : <Navigate to="/login" />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
)
