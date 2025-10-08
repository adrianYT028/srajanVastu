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
    if (items.length === 0) {
      alert('Your cart is empty! Please add some items before placing an order.');
      return;
    }

    const phone = '919650786531'; // Correct phone number from your site
    
    let message = `🛒 New Order for SRAJAN VASTU\n\n`;
    message += `📋 Order Details:\n`;
    message += `${'-'.repeat(30)}\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Price: ${item.price}\n`;
      message += `   Quantity: ${item.quantity}\n\n`;
    });
    
    message += `${'-'.repeat(30)}\n\n`;
    message += `📱 Please confirm this order and provide payment details.`;

    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    // Show confirmation before sending
    const confirmed = window.confirm(
      `Send order details to WhatsApp?\n\nItems: ${items.length}\n\nThis will open WhatsApp with your order details.`
    );
    
    if (confirmed) {
      window.open(url, '_blank');
      
      // Optional: Clear cart after successful send (you can remove this if you don't want to clear)
      setTimeout(() => {
        const shouldClear = window.confirm('Order sent successfully! Would you like to clear your cart?');
        if (shouldClear) {
          dispatch({ type: 'CLEAR_CART' });
        }
      }, 1000);
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
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
              <div className="total-display">
                <span className="total-label">Total:</span>
                <strong className="total-amount">₹{total.toLocaleString()}</strong>
              </div>
              <div className="cart-actions">
                <button className="btn secondary" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
                  Clear Cart
                </button>
                <button 
                  className="btn primary whatsapp-btn" 
                  onClick={sendWhatsApp}
                  disabled={items.length === 0}
                >
                  <i className="fab fa-whatsapp"></i>
                  Send via WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
