import { createContext, useContext, useReducer } from 'react';
const CartCtx = createContext();
function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.find(i => i._id === action.item._id);
      if (exists) return state.map(i => i._id === exists._id ? { ...i, qty: i.qty + 1 } : i);
      return [...state, { ...action.item, qty: 1 }];
    }
    case 'REMOVE': return state.filter(i => i._id !== action.id);
    case 'CLEAR': return [];
    case 'SETQTY': return state.map(i => i._id === action.id ? { ...i, qty: action.qty } : i);
    default: return state;
  }
}
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  return <CartCtx.Provider value={{ cart, dispatch }}>{children}</CartCtx.Provider>;
};
export const useCart = () => useContext(CartCtx);
