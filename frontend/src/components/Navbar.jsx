import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CartIcon from './CartIcon';
import logo from '../assets/03.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="Srajan Vastu" className="navbar-logo" />
        </Link>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-item" onClick={closeMenu}>About</Link>
          <Link to="/work" className="nav-item" onClick={closeMenu}>Achivements</Link>
          <Link to="/services" className="nav-item" onClick={closeMenu}>Services</Link>
          <Link to="/products" className="nav-item" onClick={closeMenu}>Products</Link>
          <Link to="/videos" className="nav-item" onClick={closeMenu}>Media</Link>
          <Link to="/contact" className="nav-item" onClick={closeMenu}>Contact</Link>
          <Link to="/booking" className="nav-button" onClick={closeMenu}>Book Consultation</Link>
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
