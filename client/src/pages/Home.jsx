import React, { useEffect, useState } from 'react'
import axios from '../utils/axios.js'
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../state/CartContext.jsx'

export default function Home() {
  const [products, setProducts] = useState([])
  const { add } = useCart()

  useEffect(() => {
    axios.get('/products').then(r => setProducts(r.data))
  }, [])

  return (
    <div>
      <section className="hero">
        <div>
          <h1>Auténticas pizzas artesanales</h1>
          <p>Ingredientes frescos, masa madre y horno a la piedra. ¡Listas para tu mesa en minutos!</p>
          <div className="cta">
            <a className="btn btn-primary" href="#menu">Ver menú</a>
            <a className="btn btn-ghost" href="#promos">Promos</a>
          </div>
        </div>
        <div className="badge">🔥 2x1 Martes de Margherita</div>
      </section>

      <h2 id="menu" className="section-title mt-24">Nuestro menú</h2>
      <div className="grid grid-cols">
        {products.map(p => (
          <ProductCard key={p._id} product={p} onAdd={() => add(p,1)} />
        ))}
      </div>
    </div>
  )
}
