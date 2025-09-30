import React, { useState, useEffect } from 'react';
import './ProductsPage.css';

const ProductsPage = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="products-page">
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <div className="construction-emoji">🛠️</div>
          <h1 className="coming-soon-title">Products Coming Soon!</h1>
          <div className="funny-message">
            <p className="main-message">Our spiritual shopping cart is getting a cosmic upgrade!</p>
            <p className="sub-message">
              We're carefully curating the finest crystals, yantras, and sacred items 
              that would make even the ancient sages jealous ✨
            </p>
          </div>
          
          <div className="progress-indicator">
            <div className="progress-text">Loading magical inventory{dots}</div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>

          <div className="preview-cards">
            <div className="preview-card">
              <div className="emoji">💎</div>
              <span>Healing Crystals</span>
            </div>
            <div className="preview-card">
              <div className="emoji">🔱</div>
              <span>Sacred Yantras</span>
            </div>
            <div className="preview-card">
              <div className="emoji">📿</div>
              <span>Rudraksha Beads</span>
            </div>
          </div>

          <div className="eta-message">
            <p>🚀 Expected Launch: Soon™ (When Mercury is no longer retrograde!)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
