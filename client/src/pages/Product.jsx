import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../utils/axios.js'
import { useCart } from '../state/CartContext.jsx'

export default function Product() {
  const { id } = useParams()
  const [p, setP] = useState(null)
  const { add } = useCart()

  useEffect(() => {
    axios.get('/products/' + id).then(r => setP(r.data))
  }, [id])

  if (!p) return <div className="center" style={{minHeight:200}}>Cargando...</div>

  const img = p.image || 'https://images.unsplash.com/photo-1541745537413-b804b1bd47a5?q=80&w=1200&auto=format&fit=crop'

  return (
    <div className="card" style={{overflow:'hidden'}}>
      <div className="card-media" style={{height:240}}>
        <img src={img} alt={p.name} />
      </div>
      <div className="card-body">
        <div className="badge">🍕 Favorita</div>
        <h1 className="section-title" style={{margin:'6px 0 2px'}}>{p.name}</h1>
        <p className="card-desc">{p.description || 'Salsa de tomate San Marzano, mozzarella fresca y albahaca.'}</p>
        <div className="card-row" style={{marginTop:8}}>
          <div className="card-price" style={{fontSize:'1.2rem'}}>${p.price}</div>
          <button onClick={() => add(p,1)} className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}
