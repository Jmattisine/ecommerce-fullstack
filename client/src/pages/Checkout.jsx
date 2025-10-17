import React from 'react'
import axios from '../utils/axios.js'
import { useCart } from '../state/CartContext.jsx'

export default function Checkout() {
  const { items, total, clear } = useCart()

  async function pagar() {
    try {
      const { data } = await axios.post('/checkout/create-order', { items })
      alert('Intento de pago creado. OrderId: ' + data.orderId)
      clear()
    } catch (e) {
      alert('Error: ' + (e?.response?.data?.msg || e.message))
    }
  }

  return (
    <div>
      <h1 className="section-title">Checkout</h1>
      <div className="card">
        <div className="card-body">
          {!items.length ? (
            <div className="card-desc">Tu carrito está vacío.</div>
          ) : (
            <>
              <ul style={{margin:0, paddingLeft:16}}>
                {items.map(it => (
                  <li key={it._id}>{it.name} x {it.qty} – <b>${it.price * it.qty}</b></li>
                ))}
              </ul>
              <div className="card-row" style={{marginTop:12}}>
                <div className="badge">Total: ${total}</div>
                <button disabled={!items.length} onClick={pagar} className="btn btn-primary">Pagar ahora</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
