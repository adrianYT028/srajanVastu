import React, { useState } from 'react';
import './ContactPage.css';
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
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We're here to help you on your journey to balance and prosperity.
            Contact us for consultations, questions, or to learn more about our
            services.
          </p>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>The Palladians,D block, Mayfield Gardens, Sector- 50, Gurgaon, Haryana 122018</span>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <a href="mailto:srajanvastu@gmail.com" className="email-link">srajanvastu@gmail.com</a>
          </div>
          <div className="info-item">
            <FaPhone />
            <span>+91 9650786531</span>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/srajanvastu">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/srajanvastu">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCfOsKLhjwFmHiVhfcQ6NgwQ">
              <FaYoutube />
            </a>
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
