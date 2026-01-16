import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import OptimizedImage from '../components/OptimizedImage';
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
      {/* SEO Meta Tags */}
      <SEO 
        title="Srajan Vastu - Expert Vastu Consultant, Numerologist & Astrologer | Transform Your Space"
        description="Professional Vastu Shastra consultation services by certified expert Seema Sharma. Get expert guidance in Residential & Commercial Vastu, Numerology, Astrology, and spiritual products. Transform your space for prosperity, health, and success. Book your consultation today!"
        keywords="vastu consultant, vastu shastra expert, certified vastu consultant, numerology consultation, astrology services, residential vastu, commercial vastu, vastu remedies, numerologist, astrologer, spiritual products, energy healing, vastu tips, horoscope analysis, name correction, career guidance, marriage compatibility, vastu for home, vastu for office"
        canonical="https://www.srajanvastu.com/"
      />
      
      {/* Structured Data for SEO */}
      <StructuredData type="home" />
    

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
                alt="7 Mukhi Rudraksha - Attracts wealth and prosperity associated with Goddess Lakshmi"
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
                alt="Tiger Eye Bracelet - Protection from negativity and confidence booster"
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
                alt="Shri Yantra Brass - Sacred geometry for prosperity and success"
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

      {/* Rich SEO Content Section - About Vastu Shastra */}
      <section className="page-section seo-content-section">
        <div className="content-wrapper">
          <h2 className="section-title">Transform Your Life with Ancient Wisdom of Vastu Shastra</h2>
          
          <div className="content-block">
            <h3>What is Vastu Shastra?</h3>
            <p>
              Vastu Shastra is an ancient Indian science of architecture and design that harmonizes the five elements of nature—Earth, Water, Fire, Air, and Space—to create balanced and positive energy in your living and working spaces. For over thousands of years, Vastu principles have been guiding people to design homes, offices, and commercial spaces that promote health, wealth, prosperity, and overall well-being.
            </p>
            <p>
              At Srajan Vastu, we combine traditional Vastu wisdom with modern scientific understanding to help you create spaces that not only look beautiful but also support your life goals. Our certified Vastu consultant, Seema Sharma, brings years of expertise in analyzing energy patterns and providing practical, non-demolition Vastu remedies that work in real-world situations.
            </p>
          </div>

          <div className="content-block">
            <h3>Why Choose Professional Vastu Consultation?</h3>
            <p>
              Many people experience challenges in life without realizing that their living or working environment might be contributing to these issues. Incorrect placement of rooms, wrong directional alignments, or blocked energy zones can create obstacles in various aspects of life including:
            </p>
            <ul className="benefits-list">
              <li><strong>Financial Problems:</strong> Persistent money issues, business losses, or blocked income sources</li>
              <li><strong>Health Concerns:</strong> Recurring health issues, stress, anxiety, or lack of mental peace</li>
              <li><strong>Relationship Issues:</strong> Family conflicts, marriage problems, or discord among family members</li>
              <li><strong>Career Obstacles:</strong> Stagnant career growth, job instability, or workplace challenges</li>
              <li><strong>Educational Challenges:</strong> Difficulty in studies, lack of concentration, or poor academic performance</li>
            </ul>
            <p>
              Professional Vastu consultation identifies these energy imbalances and provides targeted remedies to restore harmony. Our approach is scientific, practical, and designed to work without requiring expensive structural changes or demolitions.
            </p>
          </div>

          <div className="content-block">
            <h3>Comprehensive Vastu Services for Every Need</h3>
            <p>
              Whether you're planning a new home, buying an apartment, setting up an office, or experiencing challenges in your current space, Srajan Vastu offers specialized consultation services tailored to your specific needs:
            </p>
            
            <h4>Residential Vastu Consultation</h4>
            <p>
              Your home is your sanctuary, and it should support your family's health, happiness, and prosperity. Our residential Vastu services include complete analysis of plot direction, main entrance placement, room allocations, kitchen positioning, bedroom locations, bathroom placements, and remedy suggestions for existing homes. We ensure every corner of your home radiates positive energy.
            </p>

            <h4>Commercial Vastu for Business Success</h4>
            <p>
              Business success depends not just on hard work but also on the energy flow in your workplace. Our commercial Vastu services help optimize offices, shops, factories, and commercial complexes for maximum productivity, employee satisfaction, and financial growth. We analyze reception areas, workstation placements, cash counter positions, and owner cabin locations to align your business with success.
            </p>

            <h4>New Construction Vastu Planning</h4>
            <p>
              Building a new property? Get it right from the foundation! Our new construction Vastu services guide you through plot selection, building design, room layouts, and directional alignments before construction begins. This proactive approach saves money and ensures your dream home or office is built on a foundation of positive energy from day one.
            </p>
          </div>

          <div className="content-block">
            <h3>Numerology: Unlock the Power of Numbers in Your Life</h3>
            <p>
              Numerology is the ancient science of numbers and their vibrational influence on human life. Every number carries specific energy and meaning that affects your personality, destiny, relationships, and success. At Srajan Vastu, our numerology services help you understand and harness these powerful number vibrations.
            </p>
            <p>
              Our numerology consultations include personal numerology readings based on your birth date and name, name correction services to align your name with favorable numbers, mobile number analysis to ensure your phone number supports your goals, and business name numerology for entrepreneurs. Numbers influence everything from your life path to daily decisions—let us help you make them work in your favor.
            </p>
          </div>

          <div className="content-block">
            <h3>Astrology Services for Life Guidance</h3>
            <p>
              Astrology provides profound insights into your life journey, personality traits, strengths, challenges, and opportunities. Our comprehensive astrology services include detailed horoscope analysis, career and business guidance, marriage compatibility matching, health predictions and remedies, and auspicious timing for important life events.
            </p>
            <p>
              Seema Sharma's expertise in Vedic astrology helps clients navigate life's complexities with confidence. Whether you're facing career decisions, relationship concerns, health issues, or simply seeking clarity about your life path, our astrological guidance provides the insights you need.
            </p>
          </div>

          <div className="content-block">
            <h3>Why Choose Srajan Vastu?</h3>
            <ul className="benefits-list">
              <li><strong>Certified Expertise:</strong> Seema Sharma is a certified Vastu consultant with years of practical experience</li>
              <li><strong>Scientific Approach:</strong> We combine ancient wisdom with modern scientific understanding</li>
              <li><strong>Non-Demolition Solutions:</strong> Practical remedies that don't require expensive structural changes</li>
              <li><strong>Personalized Consultations:</strong> Every space and individual is unique—our solutions are customized</li>
              <li><strong>Proven Results:</strong> Hundreds of satisfied clients have transformed their lives through our services</li>
              <li><strong>Holistic Services:</strong> Complete solutions covering Vastu, Numerology, Astrology, and spiritual products</li>
              <li><strong>Ongoing Support:</strong> We're here to guide you even after the consultation</li>
            </ul>
          </div>

          <div className="content-block">
            <h3>Begin Your Transformation Journey Today</h3>
            <p>
              Don't let negative energy hold you back from achieving your dreams. Whether you're experiencing specific challenges or simply want to enhance the positive energy in your space, Srajan Vastu is here to help. Our comprehensive consultation services provide practical, effective solutions that create lasting positive changes.
            </p>
            <p>
              Book your consultation today and take the first step toward a more prosperous, harmonious, and fulfilling life. Contact us to schedule your personalized Vastu, Numerology, or Astrology session with expert consultant Seema Sharma.
            </p>
            <div className="cta-container" style={{marginTop: '30px'}}>
              <Link to="/booking" className="cta-button">Book Your Consultation Now</Link>
              <Link to="/contact" className="cta-button">Contact Us for More Information</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
