import { createContext, useContext, useEffect, useReducer } from 'react';

const AuthCtx = createContext();
const initial = { user: null, token: null };
function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN': return { ...state, user: action.user, token: action.token };
    case 'LOGOUT': return initial;
    default: return state;
  }
}
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial, () => {
    const saved = localStorage.getItem('auth');
    return saved ? JSON.parse(saved) : initial;
  });
  useEffect(() => localStorage.setItem('auth', JSON.stringify(state)), [state]);
  const login = (user, token) => dispatch({ type:'LOGIN', user, token });
  const logout = () => dispatch({ type:'LOGOUT' });
  return <AuthCtx.Provider value={{ ...state, login, logout }}>{children}</AuthCtx.Provider>;
};
export const useAuth = () => useContext(AuthCtx);
