import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from '../utils/axios.js'
const Ctx=createContext(null); export const useUser=()=>useContext(Ctx)
export function UserProvider({children}){
 const [user,setUser]=useState(null); const token=localStorage.getItem('token')
 useEffect(()=>{ if(token){ axios.get('/auth/me',{headers:{'x-auth-token':token}}).then(r=>setUser(r.data)).catch(()=>localStorage.removeItem('token')) }},[])
 const login=(email,password)=>axios.post('/auth/login',{email,password}).then(r=>{localStorage.setItem('token',r.data.token); setUser(r.data.user)})
 const register=(name,email,password)=>axios.post('/auth/register',{name,email,password}).then(r=>{localStorage.setItem('token',r.data.token); setUser(r.data.user)})
 const logout=()=>{localStorage.removeItem('token'); setUser(null)}
 return <Ctx.Provider value={{user,login,register,logout}}>{children}</Ctx.Provider>
}
