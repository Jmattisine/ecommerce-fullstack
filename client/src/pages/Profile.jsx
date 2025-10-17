import React, { useEffect, useState } from 'react'
import axios from '../utils/axios.js'

export default function Profile() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get('/orders/mine').then(r => setOrders(r.data))
  }, [])

  return (
    <div>
      <h1 className="section-title">Mis pedidos</h1>
      {!orders.length ? (
        <div className="card"><div className="card-body"><div className="card-desc">Aún no tienes pedidos.</div></div></div>
      ) : (
        <div className="grid" style={{gridTemplateColumns:'1fr'}}>
          {orders.map(o => (
            <div key={o._id} className="card">
              <div className="card-body">
                <div className="card-row">
                  <div className="badge">#{o._id.slice(-6)}</div>
                  <div className="card-price">${o.total}</div>
                </div>
                <div className="card-desc">Estado: <b>{o.status}</b></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
