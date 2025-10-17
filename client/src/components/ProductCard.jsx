import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, onAdd }){
  const img = product.image || 'https://images.unsplash.com/photo-1541745537413-b804b1bd47a5?q=80&w=1200&auto=format&fit=crop'
  return (
    <div className="card">
      <div className="card-media">
        <img src={img} alt={product.name} />
      </div>
      <div className="card-body">
        <div className="card-title">{product.name}</div>
        <div className="card-desc">{product.description || 'Pizza artesanal horneada a la piedra.'}</div>
        <div className="card-row">
          <div className="card-price">${product.price}</div>
          <div style={{display:'flex', gap:8}}>
            <Link to={`/product/${product._id}`} className="btn btn-ghost">Ver</Link>
            <button onClick={onAdd} className="btn btn-primary">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
