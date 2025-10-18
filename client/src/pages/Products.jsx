import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api.js';

export default function Products() {
  const [list, setList] = useState([]);
  useEffect(() => { api.get('/products').then(r => setList(r.data)); }, []);
  return (
    <div>
      <h1>Productos</h1>
      <ul>{list.map(p => (
        <li key={p._id}>
          <Link to={`/products/${p._id}`}>{p.name}</Link> — ${p.price}
        </li>
      ))}</ul>
    </div>
  );
}
