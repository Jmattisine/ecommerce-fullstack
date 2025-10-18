import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Product from './pages/Product.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Checkout from './pages/Checkout.jsx';
import { useAuth } from './contexts/AuthContext.jsx';

const Private = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <nav style={{ display:'flex', gap:12, marginBottom:16 }}>
        <Link to="/">Home</Link>
        <Link to="/products">Productos</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log in</Link>
        <Link to="/profile">Mi perfil</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Private><Profile/></Private>} />
        <Route path="/checkout" element={<Private><Checkout/></Private>} />
      </Routes>
    </div>
  );
}
