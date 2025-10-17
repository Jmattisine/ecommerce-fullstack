import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../state/UserContext.jsx'
import { useCart } from '../state/CartContext.jsx'

export default function NavBar(){
  const { user, logout } = useUser()
  const { items } = useCart()
  const count = items.reduce((a,i)=>a+i.qty,0)

  return (
    <div className="nav">
      <div className="nav-inner container" style={{padding:'12px 24px'}}>
        <Link to="/" className="brand">
          <div className="brand-logo"></div>
          <span className="brand-title">Pizza Viva</span>
        </Link>
        <div className="nav-actions">
          <Link to="/checkout" className="btn btn-ghost">
            🛒 Carrito {count>0 && <span className="badge">{count}</span>}
          </Link>
          {user ? (
            <>
              <Link to="/profile" className="btn btn-dark">Mi perfil</Link>
              <button className="btn btn-primary" onClick={logout}>Salir</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-dark">Ingresar</Link>
              <Link to="/register" className="btn btn-primary">Crear cuenta</Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
