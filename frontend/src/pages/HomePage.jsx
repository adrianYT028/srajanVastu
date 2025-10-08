import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import expertPhoto from '../assets/WhatsApp Image 2025-09-15 at 01.42.19_a80530b0.jpg';
import rudrakshaImg from '../assets/7-mukhi-rudraksha.jpg';
import tigerEyeImg from '../assets/tiger-eye-bracelet.jpg';
import shriYantraImg from '../assets/shri-yantra-brass.jpg';

const HomePage = () => {
  
  const heroTexts = [
    "VASTU • NUMEROLOGY • ASTROLOGY • SPIRITUAL PRODUCTS"
  ];

  return (
    
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          <span className="constant-text">SRAJAN</span>
          <span className="constant-text">VASTU</span>
        </h1>
        <p className="hero-tagline">Energy. Wisdom. Harmony.</p>
        <div className="button-group">
          <Link to="/services" className="cta-button">Explore Services</Link>
          <Link to="/products" className="secondary-button">Explore Products</Link>
          <Link to="/booking" className="tertiary-button">Book Consultation</Link>
        </div>
      </section>

      {/* About the Expert */}
      <section className="page-section expert-section">
        <div className="expert-container">
            <div className="expert-image">
            <img src={expertPhoto} alt="Seema Sharma - Vastu & Astrology Expert" />
          </div>
          <div className="expert-content">
            <h2 className="section-title">Meet Your Guide</h2>
            <h3>Seema Sharma</h3>
            <p className="expert-title">Certified Vastu Consultant, Numerologist and Astrologer
</p>
            <p className="expert-description">
Our chief consultant Ms. Seema Sharma is a renowned Vastu professional and researcher with many years of experience in this field. She can help you transform your space into a hub of positivity.
Based on her observations, she will evaluate all energies and positive factors within the premises. She will also advise on how to make corrections without demolition or significant expenses.
            </p>
            <p className="expert-description">
Her scientific approach, combined with traditional practices, helps you resolve various issues. Contact her today to foster positive energy flow and prosperity in your life through the right arrangement of your space.
            </p>
            <div className="expert-cta">
              <Link to="/contact" className="cta-button">GET IN TOUCH</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="page-section">
        <h2 className="section-title">Our Core Services</h2>
        <div className="grid-container">
          <Link to="/services#vastu-consultation" className="info-card clickable-card" style={{"--animation-delay": "0.1s"}}>
            <h3>Vastu Consultation</h3>
            <p>Transform your home or office into a space that supports growth, peace, and success by aligning with Vastu principles.
</p>
          </Link>
          <Link to="/services#numerology-consultation" className="info-card clickable-card" style={{"--animation-delay": "0.2s"}}>
            <h3>Numerology Guidance</h3>
            <p> Discover the hidden meanings in numbers and how they influence your decisions, relationships, and future.
</p>
          </Link>
          <Link to="/services#astrology-consultation" className="info-card clickable-card" style={{"--animation-delay": "0.3s"}}>
            <h3>
Astrology Consultation</h3>
            <p>Get deeper insights into your life journey, challenges, and opportunities through personalized astrological readings.</p>
          </Link>
        </div>
        <div className="services-cta">
          <Link to="/services" className="cta-button">View All Services</Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="page-section light-bg">
        <h2 className="section-title">Featured Products</h2>
        <div className="grid-container">
          <Link to="/products" className="info-card clickable-card" style={{"--animation-delay": "0.1s"}}>
            <div className="product-image-placeholder">
              <img 
                src={rudrakshaImg} 
                alt="7 Mukhi Rudraksha"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="placeholder-text" style={{display: 'none'}}>Product Image</div>
            </div>
            <h3>7 Mukhi Rudraksha</h3>
            <p>Associated with Goddess Lakshmi, attracts wealth and prosperity. Wear as pendant after purification rituals.</p>
          </Link>
          <Link to="/products" className="info-card clickable-card" style={{"--animation-delay": "0.3s"}}>
            <div className="product-image-placeholder">
              <img 
                src={tigerEyeImg} 
                alt="Tiger Eye Bracelet"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="placeholder-text" style={{display: 'none'}}>Product Image</div>
            </div>
            <h3>Tiger Eye Bracelet</h3>
            <p>Protects from negativity and boosts confidence. Wear on right hand wrist after purification.</p>
          </Link>
          <Link to="/products" className="info-card clickable-card" style={{"--animation-delay": "0.5s"}}>
            <div className="product-image-placeholder">
              <img 
                src={shriYantraImg} 
                alt="Shri Yantra Brass"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="placeholder-text" style={{display: 'none'}}>Product Image</div>
            </div>
            <h3>Shri Yantra (Brass)</h3>
            <p>Brings prosperity, wealth, and success in business & life. Place in North-East and energize with daily puja.</p>
          </Link>
        </div>
        <div className="products-cta">
          <Link to="/products" className="cta-button">View All Products</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
