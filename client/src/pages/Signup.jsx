import { useState } from 'react';
import api from '../api.js';

export default function Signup() {
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const submit = async e => {
    e.preventDefault();
    await api.post('/auth/register', form);
    alert('Registrado. Ahora inicia sesión.');
  };
  return (
    <form onSubmit={submit}>
      <h1>Sign Up</h1>
      <input placeholder="Nombre" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button>Crear cuenta</button>
    </form>
  );
}
