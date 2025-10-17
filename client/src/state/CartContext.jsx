import React, { createContext, useContext, useState } from 'react'
const Ctx=createContext(null); export const useCart=()=>useContext(Ctx)
export function CartProvider({children}){
 const [items,setItems]=useState([])
 function add(p,qty=1){ setItems(prev=>{ const f=prev.find(x=>x._id===p._id); if(f) return prev.map(x=>x._id===p._id?{...x,qty:x.qty+qty}:x); return [...prev,{...p,qty}] }) }
 function remove(id){ setItems(prev=>prev.filter(x=>x._id!==id)) }
 function clear(){ setItems([]) }
 const total=items.reduce((a,i)=>a+i.price*i.qty,0)
 return <Ctx.Provider value={{items,add,remove,clear,total}}>{children}</Ctx.Provider>
}
