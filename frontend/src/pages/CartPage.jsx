import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, useCartDispatch } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { items } = useCart();
  const dispatch = useCartDispatch();

  const total = items.reduce((s, i) => {
    // assume price is formatted like '₹1,500' — strip non-digits
    const n = Number(String(i.price || '').replace(/[^0-9.-]+/g, '')) || 0;
    return s + n * (i.quantity || 1);
  }, 0);

  const sendWhatsApp = () => {
    const phone = '+91 84481 69911'; // replace with your number
    let message = `New order from SRAJAN VASTU (%20)\n`;
    items.forEach(it => {
      message += `${it.name} - Qty: ${it.quantity} - Price: ${it.price}\n`;
    });
    message += `Total: ₹${total}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); 
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="coming-soon-banner">
          <div className="coming-soon-icon">🚧</div>
          <h2>WE WILL BE BACK WITH THIS FEATURE SOON</h2>
          <p>Our e-commerce functionality is under development. Stay tuned for an amazing shopping experience!</p>
        </div>
        <h1 className="section-title">Your Cart</h1>
        {items.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-illustration">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet. Discover our curated products to bring positive energy into your home.</p>
            <div className="empty-actions">
              <Link to="/products" className="browse-btn">Browse Products</Link>
              <button className="btn" onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear</button>
            </div>

            <div className="featured-section">
              <h3>Popular picks</h3>
              <div className="featured-list">
                {/* quick add suggestions */}
                {[
                  { id: 4, name: 'Shree Yantra', price: '₹2,500' },
                  { id: 1, name: 'Rose Quartz Crystal', price: '₹1,800' },
                  { id: 6, name: 'Vastu Pyramid', price: '₹2,200' },
                ].map(p => (
                  <div key={p.id} className="featured-card">
                    <div className="featured-info">
                      <strong>{p.name}</strong>
                      <div className="price">{p.price}</div>
                    </div>
                    <div>
                      <button className="btn small" onClick={() => dispatch({ type: 'ADD_ITEM', payload: { ...p, quantity: 1 } })}>Add</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <ul className="cart-list">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-left">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">{item.price}</div>
                  </div>
                  <div className="cart-item-right">
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                      <button onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, quantity: (item.quantity || 1) - 1 } })}>−</button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, quantity: e.target.value } })}
                        onBlur={(e) => {
                          const v = Number(e.target.value) || 1;
                          dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, quantity: Math.max(1, Math.floor(v)) } });
                        }}
                      />
                      <button onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, quantity: (item.quantity || 1) + 1 } })}>+</button>
                    </div>
                    <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <div>Total: <strong>₹{total}</strong></div>
              <div className="cart-actions">
                <button className="btn" onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
                <button className="btn primary" onClick={sendWhatsApp}>Send via WhatsApp</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
