import React, { createContext, useReducer, useContext, useEffect, useRef } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i => i.id === action.payload.id ? { ...i, quantity: i.quantity + (action.payload.quantity || 1) } : i)
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }] };
    }
    case 'REMOVE_ITEM': {
      return { ...state, items: state.items.filter(i => i.id !== action.payload.id) };
    }
    case 'UPDATE_QTY': {
      const qty = Number(action.payload.quantity) || 0;
      if (qty <= 0) {
        return { ...state, items: state.items.filter(i => i.id !== action.payload.id) };
      }
      const normalized = Math.max(1, Math.floor(qty));
      return { ...state, items: state.items.map(i => i.id === action.payload.id ? { ...i, quantity: normalized } : i) };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'SET_CART':
      return { ...state, items: action.payload.items || [] };
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

export const CartProvider = ({ children }) => {
  // lazy initializer to hydrate from localStorage once
  const initializer = () => {
    try {
      const raw = localStorage.getItem('srajan_cart');
      if (raw) return { items: JSON.parse(raw) };
    } catch (e) {
      console.warn('Failed to parse cart from localStorage', e);
    }
    return initialState;
  };

  const [state, dispatch] = useReducer(cartReducer, undefined, initializer);

  // debounced write to localStorage
  const writeTimer = useRef(null);
  useEffect(() => {
    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => {
      try {
        localStorage.setItem('srajan_cart', JSON.stringify(state.items));
      } catch (e) {
        console.warn('Failed to write cart to localStorage', e);
      }
    }, 250);
    return () => clearTimeout(writeTimer.current);
  }, [state.items]);

  // sync across tabs/windows
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== 'srajan_cart') return;
      try {
        const items = e.newValue ? JSON.parse(e.newValue) : [];
        dispatch({ type: 'SET_CART', payload: { items } });
      } catch (err) {
        console.warn('Failed to parse incoming storage event', err);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);

export default CartProvider;
