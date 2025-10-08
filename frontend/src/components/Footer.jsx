import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFooterLinkClick = (to) => {
    // Use a more reliable approach for scroll-to-top
    const scrollToTop = () => {
      const scrollOptions = {
        top: 0,
        left: 0,
        behavior: 'smooth'
      };

      // Try modern scroll API first, fallback to older method
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo(scrollOptions);
      } else {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
    };

    // Scroll to top after a brief delay to ensure navigation completes
    setTimeout(scrollToTop, 200);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
  {/* Main Footer Content */}
  <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-brand"></h3>
            <p className="footer-description">
              Transform your living and working spaces into centers of positive energy and prosperity. Our certified Vastu consultants combine ancient wisdom with practical solutions to create harmonious environments that support your health, relationships, and business success across Delhi NCR.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/srajanvastu" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/srajanvastu" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/919650786531" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:srajanvastu@gmail.com" className="social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link" onClick={() => handleFooterLinkClick('/')}>Home</Link></li>
              <li><Link to="/about" className="footer-link" onClick={() => handleFooterLinkClick('/about')}>About Us</Link></li>
              <li><Link to="/services" className="footer-link" onClick={() => handleFooterLinkClick('/services')}>Our Services</Link></li>
              <li><Link to="/work" className="footer-link" onClick={() => handleFooterLinkClick('/work')}>Achievements</Link></li>
              <li><Link to="/products" className="footer-link" onClick={() => handleFooterLinkClick('/products')}>Products</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link" onClick={() => handleFooterLinkClick('/services')}>Residential Vastu</Link></li>
              <li><Link to="/services" className="footer-link" onClick={() => handleFooterLinkClick('/services')}>Commercial Vastu</Link></li>
              <li><Link to="/services" className="footer-link" onClick={() => handleFooterLinkClick('/services')}>Numerology & Pronology</Link></li>
              <li><Link to="/services" className="footer-link" onClick={() => handleFooterLinkClick('/services')}>Astrology Consultations</Link></li>
              <li><Link to="/booking" className="footer-link" onClick={() => handleFooterLinkClick('/booking')}>Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>The Palladians, D block, Mayfield Gardens, Sector-50, Gurgaon, Haryana 122018</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 9650786531</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>srajanvastu@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>Sun - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} SRAJAN VASTU. All rights reserved. | Empowering harmony through ancient wisdom and modern solutions.
            </p>
            <div className="footer-bottom-links">
              <Link to="/about" className="footer-bottom-link" onClick={() => handleFooterLinkClick('/about')}>About Us</Link>
              <Link to="/contact" className="footer-bottom-link" onClick={() => handleFooterLinkClick('/contact')}>Contact</Link>
              <Link to="/terms-and-conditions" className="footer-bottom-link" onClick={() => handleFooterLinkClick('/terms-and-conditions')}>Terms & Conditions</Link>
              <Link to="/booking" className="footer-bottom-link" onClick={() => handleFooterLinkClick('/booking')}>Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
