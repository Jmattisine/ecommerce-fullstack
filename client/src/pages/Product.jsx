import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api.js';
import { useCart } from '../contexts/CartContext.jsx';

export default function Product() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const { dispatch } = useCart();
  useEffect(() => { api.get(`/products/${id}`).then(r => setP(r.data)); }, [id]);
  if (!p) return 'Cargando...';
  return (
    <div>
      <h1>{p.name}</h1>
      <p>{p.description}</p>
      <p>${p.price}</p>
      <button onClick={() => dispatch({ type:'ADD', item:p })}>Agregar al carrito</button>
    </div>
  );
}
