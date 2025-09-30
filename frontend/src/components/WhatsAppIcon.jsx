import React from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
  return (
    <Link to="/contact" className="whatsapp-float" aria-label="Contact us via WhatsApp">
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Contact</span>
    </Link>
  );
};

export default WhatsAppIcon;
