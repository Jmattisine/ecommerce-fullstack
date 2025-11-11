import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartCtx = createContext([]);
const initial = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const qtyToAdd = Number(action.qty ?? 1);
      const exists = state.find((i) => i._id === action.item._id);
      if (exists) {
        return state.map((i) =>
          i._id === exists._id ? { ...i, qty: i.qty + qtyToAdd } : i
        );
      }
      return [...state, { ...action.item, qty: Math.max(1, qtyToAdd) }];
    }
    case "REMOVE":
      return state.filter((i) => i._id !== action.id);
    case "CLEAR":
      return [];
    case "SETQTY": {
      const nextQty = Math.max(1, Number(action.qty ?? 1));
      return state.map((i) => (i._id === action.id ? { ...i, qty: nextQty } : i));
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initial, () => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : initial;
  });

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const add = (item, qty = 1) => dispatch({ type: "ADD", item, qty });
  const remove = (id) => dispatch({ type: "REMOVE", id });
  const clear = () => dispatch({ type: "CLEAR" });
  const setQty = (id, qty) => dispatch({ type: "SETQTY", id, qty });

  const value = useMemo(
    () => ({ cart, add, remove, clear, setQty, dispatch }),
    [cart]
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export const useCart = () => useContext(CartCtx);
