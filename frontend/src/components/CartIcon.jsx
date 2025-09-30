import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartIcon.css';

const CartIcon = () => {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + (i.quantity || 1), 0);

  return (
    <Link to="/cart" className="cart-icon" aria-label="Cart">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6H5L4 2H2" stroke="#2c3e50" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6H20L18 14H8L6 6Z" stroke="#2c3e50" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="20" r="1" fill="#2c3e50" />
        <circle cx="17" cy="20" r="1" fill="#2c3e50" />
      </svg>
      {count > 0 && <span className="cart-count">{count}</span>}
    </Link>
  );
};

export default CartIcon;
