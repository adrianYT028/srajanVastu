import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';

const AboutPage = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  const heroTexts = [
    "VASTU || NUMEROLOGY || ASTROLOGY || SPIRITUAL PRODUCTS",
    "सकारात्मक ऊर्जा का सृजन || creation of positive energy"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentText(prev => (prev + 1) % heroTexts.length);
        setIsFading(false);
      }, 300); // Half of transition time
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
      <SEO 
        title="About Srajan Vastu - Meet Expert Vastu Consultant Seema Sharma"
        description="Learn about Srajan Vastu and certified expert Seema Sharma. Discover our professional Vastu Shastra, Numerology, and Astrology consultation services backed by years of experience and proven results."
        keywords="about vastu consultant, seema sharma vastu expert, certified vastu consultant, vastu shastra expert, numerology expert, astrology expert, professional vastu consultant"
        canonical="https://www.srajanvastu.com/about"
      />
      <StructuredData 
        type="about" 
        customData={{
          breadcrumbs: [
            { name: 'Home', url: 'https://www.srajanvastu.com/' },
            { name: 'About', url: 'https://www.srajanvastu.com/about' }
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { name: 'Home', path: '/' },
          { name: 'About' }
        ]}
      />
      
      <div className="about-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="section-title">
            <span className="constant-text">About </span>
            <span className="constant-text">SRAJAN </span>
            <span className="constant-text">VASTU</span>
          </h1>
          <p className="hero-subtitle">Where Ancient Wisdom Meets Modern Living</p>
        </div>

        {/* Introduction Section */}
        <div className="intro-section">
          <div className="intro-content">
            <div className="intro-text">
              <h2 className="story-heading">Our Story</h2>
              <p>
                At Srajan Vastu (Formerly Expeart Vastu), we believe that true success and happiness flow from harmony—harmony within ourselves, our spaces, and the universe around us. Rooted in the ancient sciences of Vastu, Numerology, and Astrology, we bring timeless wisdom into modern living, guiding individuals and businesses towards balance, clarity, and prosperity.
From aligning your home and workplace energies to choosing the right name, career, or life partner, to offering authentic remedial and spiritual products, we are your one-stop destination for holistic growth and well-being. With every consultation, every remedy, and every solution, we stand by our guiding philosophy:
 "सर्वे भवन्तु सुखिनः" – May all be happy
              </p>
              <p>
                Our philosophy combines the wisdom of ancient sciences with modern living. Every consultation, design, and product we offer is aimed at helping you achieve harmony in your home, workplace, and personal life.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-section">
          <h2 className="section-heading">Our Core Values</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation with Tradition</h3>
              <p>Blending ancient sciences with practical modern approaches.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-cog"></i>
              </div>
              <h3>Personalization</h3>
              <p>Crafting solutions that resonate with each individual's unique life journey</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Integrity & Authenticity</h3>
              <p>Delivering only genuine guidance and trusted remedies, rooted in timeless wisdom.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Team</h3>
              <p>Experienced team led by experts in Vastu, Numerology, and Astrology</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Trust</h3>
              <p>Trusted by families and businesses across India and globe for authentic guidance</p>
            </div>
             <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Holistic Well-Being</h3>
              <p>Promoting balance of mind, body, spirit, and space.</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mission-vision-container">
          <div className="mission-section">
            <div className="mv-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p>
              At Srajan Vastu, our mission is to harmonize lives by blending the timeless wisdom of Vastu, Numerology, and Astrology with practical, modern solutions. We empower individuals and businesses with authentic remedies, spiritual tools, and clear guidance—helping create spaces and choices that radiate positivity, prosperity, and lasting well-being. Guided by the eternal philosophy of "सर्वे भवन्तु सुखिनः", we are committed to spreading harmony and happiness in every life we touch.</p>
          </div>
          
          <div className="vision-section">
            <div className="mv-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>
To be the most trusted and holistic destination for Vastu, Numerology, and Astrology—guiding individuals and businesses worldwide towards harmony, success, and spiritual well-being. We envision a global community where ancient wisdom meets modern living, supported by authentic guidance, remedies, and products that inspire balance and transformation. With "सर्वे भवन्तु सुखिनः" at the heart of our vision, we aspire to contribute to a world where peace, prosperity, and happiness are shared by all.            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">Cities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-container">
            <div className="faq-item">
              <h4>What sets Vastu Consultancy apart from other design services in the area?</h4>
              <p>At Vastu Consultancy, we blend ancient wisdom with modern innovation to create harmonious living spaces. Our unique approach ensures a perfect balance of aesthetics and positive energy, setting us apart as your go-to Vastu experts in the local design scene.</p>
            </div>
            
            <div className="faq-item">
              <h4>How do Vastu consultations work, and what can I expect from the process?</h4>
              <p>Our Vastu consultations involve a thorough analysis of your space, considering energy flow, alignments, and personalized needs. Expect insightful recommendations tailored to enhance your well-being and lifestyle, creating a positive impact on your living or working environment.</p>
            </div>
            
            <div className="faq-item">
              <h4>Can Vastu Consultancy assist with both residential and commercial projects?</h4>
              <p>Absolutely! Whether you're revamping your home or enhancing your business space, Vastu Consultancy caters to both residential and commercial projects. Elevate your surroundings with our expertise, creating an environment that aligns with your goals and aspirations.</p>
            </div>
            
            <div className="faq-item">
              <h4>Are Vastu principles applicable to existing structures, or only in new constructions?</h4>
              <p>Vastu principles are versatile and can be applied to both existing structures and new constructions. Our team excels in harmonizing established spaces, ensuring a positive transformation that aligns with Vastu principles, promoting prosperity and well-being.</p>
            </div>
            
            <div className="faq-item">
              <h4>How quickly can I see results after implementing Vastu recommendations in my space?</h4>
              <p>The timeline for results varies, but many clients experience positive shifts shortly after implementing Vastu recommendations. The impact is often felt in improved energy flow, enhanced well-being, and a positive atmosphere. Our goal is to bring noticeable positive changes to your space efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
