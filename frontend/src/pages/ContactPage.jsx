import React, { useState } from 'react';
import './ContactPage.css';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';
import instagramIcon from '../assets/instagram-logo-instagram-icon-transparent-free-png.webp';
import facebookIcon from '../assets/images.png';
import youtubeIcon from '../assets/youtube-logo-hd-8.png';

// Using improved Unicode and emoji icons for better visual appeal
const FaPhone = () => <span className="icon">📞</span>;
const FaEnvelope = () => <span className="icon">✉️</span>;
const FaMapMarkerAlt = () => <span className="icon">📍</span>;
const FaFacebook = () => <img src={facebookIcon} alt="Facebook" className="social-icon facebook-icon-img" />;
const FaInstagram = () => <img src={instagramIcon} alt="Instagram" className="social-icon instagram-icon-img" />;
const FaYoutube = () => <img src={youtubeIcon} alt="YouTube" className="youtube-icon-img" />;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format a simple message for WhatsApp
    const whatsappMessage = `Hi! New inquiry from ${formData.name}. Email: ${formData.email}. Subject: ${formData.subject}. Message: ${formData.message}`;

    // WhatsApp phone number
    const phoneNumber = '919650786531'; // Added country code
    
    // Create WhatsApp URL - try different format
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    
    // Debug: Log the URL to console
    console.log('WhatsApp URL:', whatsappURL);
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Optional: Show success message
    alert('Redirecting to WhatsApp! Please send the message to complete your inquiry.');
  };

  return (
    <div className="contact-page">
      {/* SEO Meta Tags */}
      <SEO 
        title="Contact Srajan Vastu - Get in Touch with Expert Vastu Consultant Seema Sharma"
        description="Contact Srajan Vastu for professional Vastu Shastra, Numerology, and Astrology consultations. Reach out to certified expert Seema Sharma in Gurgaon, Haryana. Call +91 9650786531 or email srajanvastu@gmail.com for appointments."
        keywords="contact vastu consultant, vastu expert gurgaon, numerology consultation contact, astrology services gurgaon, vastu consultant haryana, book vastu consultation"
        canonical="https://www.srajanvastu.com/contact"
      />
      
      {/* Structured Data */}
      <StructuredData 
        type="contact" 
        customData={{
          breadcrumbs: [
            { name: 'Home', url: 'https://www.srajanvastu.com/' },
            { name: 'Contact', url: 'https://www.srajanvastu.com/contact' }
          ]
        }}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact' }
        ]}
      />
      
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>
            We're here to help you on your journey to balance and prosperity.
            Contact us for consultations, questions, or to learn more about our
            services.
          </p>
          
          {/* NAP (Name, Address, Phone) - Structured for Local SEO */}
          <div className="nap-info" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Srajan Vastu" />
            <meta itemProp="image" content="https://www.srajanvastu.com/logo.png" />
            <meta itemProp="priceRange" content="₹₹" />
            
            <div className="info-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <FaMapMarkerAlt />
              <span itemProp="streetAddress">FF, The Palladians - D Block, D-76, Mayfield Garden, Sector 50</span>
              <meta itemProp="addressLocality" content="Gurugram" />
              <meta itemProp="addressRegion" content="Haryana" />
              <meta itemProp="postalCode" content="122018" />
              <meta itemProp="addressCountry" content="IN" />
              <span>, </span>
              <span itemProp="addressLocality">Gurugram</span>
              <span>, </span>
              <span itemProp="addressRegion">Haryana</span>
              <span> </span>
              <span itemProp="postalCode">122018</span>
            </div>
            
            <div className="info-item">
              <FaEnvelope />
              <a href="mailto:srajanvastu@gmail.com" className="email-link" itemProp="email">srajanvastu@gmail.com</a>
            </div>
            
            <div className="info-item">
              <FaPhone />
              <div>
                <a href="tel:+919650786531" itemProp="telephone">+91 9650786531</a>
                <span>, </span>
                <a href="tel:+919810681928" itemProp="telephone">+91 9810681928</a>
              </div>
            </div>
          </div>
          
          <h3 style={{marginTop: '30px', marginBottom: '15px'}}>Follow Us on Social Media</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/srajanvastu" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/srajanvastu" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCfOsKLhjwFmHiVhfcQ6NgwQ" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel">
              <FaYoutube />
            </a>
          </div>
          
          {/* Google Maps Embed */}
          <div className="map-container" style={{marginTop: '30px'}}>
            <h3>Find Us on Map</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.568!2d77.0651711!3d28.4187163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d233b26638e07%3A0xad82cb523164812d!2sSrajan%20Vastu%20%E2%80%93%20Best%20Vastu%20%2C%20Numerology%20%26%20Astrology%20Consultant%20in%20Gurgaon%2CNCR!5e0!3m2!1sen!2sin!4v1704451200000!5m2!1sen!2sin"
              width="100%" 
              height="300" 
              style={{border:0, borderRadius: '8px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Srajan Vastu Office Location - FF, The Palladians, D-76, Mayfield Garden, Sector 50, Gurugram"
            ></iframe>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
