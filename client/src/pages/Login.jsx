import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../state/UserContext.jsx'

export default function Login() {
  const { login } = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const nav = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setErr('')
    try {
      await login(email, password)
      nav('/')
    } catch (e) {
      setErr(e?.response?.data?.msg || 'Error')
    }
  }

  return (
    <form onSubmit={submit} className="form" style={{maxWidth:420, margin:'24px auto'}}>
      <h1 className="form-title">Ingresar</h1>
      {err && <div style={{color:'crimson', fontWeight:800}}>{err}</div>}
      <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="btn btn-primary">Entrar</button>
    </form>
  )
}
