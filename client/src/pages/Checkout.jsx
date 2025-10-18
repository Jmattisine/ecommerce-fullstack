import { useCart } from '../contexts/CartContext.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';
import api from '../api.js';

export default function Checkout() {
  const { cart, dispatch } = useCart();
  const { token } = useAuth();

  const crearOrden = async () => {
    const items = cart.map(i => ({ product: i._id, quantity: i.qty }));
    const { data: order } = await api.post('/orders', { items }, { headers: { Authorization:`Bearer ${token}` } });
    const { data } = await api.post('/checkout/pay', { orderId: order._id }, { headers: { Authorization:`Bearer ${token}` } });
    if (data.ok || data.clientSecret) {
      dispatch({ type:'CLEAR' });
      alert('Pago OK (demo/stripe test).');
    }
  };

  const total = cart.reduce((a,i)=>a+i.price*i.qty,0);
  return (
    <div>
      <h1>Checkout</h1>
      <ul>{cart.map(i => <li key={i._id}>{i.name} x {i.qty} — ${i.price * i.qty}</li>)}</ul>
      <p>Total: ${total}</p>
      <button onClick={crearOrden} disabled={!cart.length}>Pagar</button>
    </div>
  );
}
