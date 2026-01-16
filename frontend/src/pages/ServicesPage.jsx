import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ServicesPage.css';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          // Get the element's position and scroll with some offset to show the title
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const offset = 100; // Adjust this value to show more/less space above the title
          
          window.scrollTo({
            top: absoluteElementTop - offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="services-page">
      {/* SEO Meta Tags */}
      <SEO 
        title="Vastu, Numerology & Astrology Services - Professional Consultation by Seema Sharma"
        description="Comprehensive Vastu Shastra, Numerology, and Astrology consultation services. Residential & Commercial Vastu, Personal Numerology, Name Correction, Horoscope Analysis, Career Guidance, Marriage Compatibility and more. Expert guidance by certified consultant Seema Sharma."
        keywords="vastu consultation services, numerology services, astrology consultation, residential vastu, commercial vastu, personal numerology, name correction, horoscope analysis, marriage compatibility, career guidance, vastu expert"
        canonical="https://www.srajanvastu.com/services"
      />
      
      {/* Structured Data */}
      <StructuredData 
        type="services" 
        customData={{
          breadcrumbs: [
            { name: 'Home', url: 'https://www.srajanvastu.com/' },
            { name: 'Services', url: 'https://www.srajanvastu.com/services' }
          ]
        }}
      />
      
      <div className="services-page-container">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { name: 'Home', path: '/' },
            { name: 'Services' }
          ]}
        />
        
        <h1>Our Services</h1>
        
        {/* Vastu Consultation Section */}
        <div className="service-section" id="vastu-consultation">
          <h2 className="section-heading">Vastu Consultation</h2>
          <div className="services-card-grid">
            <Link to="/services/residential-vastu" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Residential Vastu</h3>
                <p>Transform your home into a harmonious sanctuary with personalized Vastu solutions for peace, prosperity, and positive energy flow.</p>
              </div>
            </Link>
            <Link to="/services/commercial-vastu" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Commercial Vastu</h3>
                <p>Optimize your business space for success, growth, and profitability with expert Vastu guidance for offices, shops, and commercial properties.</p>
              </div>
            </Link>
            <Link to="/services/new-construction-vastu" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Vastu for New Constructions</h3>
                <p>Ensure your new construction follows Vastu principles from the foundation up, creating perfectly aligned and harmonious structures.</p>
              </div>
            </Link>
            <Link to="/services/apartment-selection" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Apartment / Flat Selection</h3>
                <p>Expert guidance in selecting the perfect apartment or flat based on Vastu principles for maximum prosperity and well-being.</p>
              </div>
            </Link>
            <Link to="/services/advance-energy-enhancement" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Advance Vastu – Energy Enhancement</h3>
                <p>Advanced techniques for enhancing and amplifying positive energy flow in your existing space through specialized Vastu methods.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Numerology Consultation Section */}
        <div className="service-section" id="numerology-consultation">
          <h2 className="section-heading">Numerology Consultation</h2>
          <div className="services-card-grid">
            <Link to="/services/personal-numerology" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Personal Numerology</h3>
                <p>Discover your life path, personality traits, and destiny through comprehensive personal numerology analysis based on your birth date and name.</p>
              </div>
            </Link>
            <Link to="/services/name-correction" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Name Correction</h3>
                <p>Enhance your luck and success through scientific name correction techniques that align your name vibrations with positive numerological energies.</p>
              </div>
            </Link>
            <Link to="/services/mobile-numerology" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Mobile Numerology</h3>
                <p>Choose the perfect mobile number that resonates with your personal numerology to attract prosperity, success, and positive energy in your life.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Astrology Consultation Section */}
        <div className="service-section" id="astrology-consultation">
          <h2 className="section-heading">Astrology Consultation</h2>
          <div className="services-card-grid">
            <Link to="/services/horoscope-analysis" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Horoscope Analysis</h3>
                <p>Get detailed insights into your life through comprehensive horoscope analysis, including birth chart reading, planetary positions, and future predictions.</p>
              </div>
            </Link>
            <Link to="/services/career-business-guidance" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Career & Business Guidance</h3>
                <p>Receive expert astrological guidance for career choices, business decisions, and professional growth based on your planetary alignments.</p>
              </div>
            </Link>
            <Link to="/services/marriage-compatibility" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Marriage & Compatibility</h3>
                <p>Ensure marital harmony and compatibility through detailed astrological matching, timing analysis, and relationship guidance.</p>
              </div>
            </Link>
            <Link to="/services/namankaran-sanskar" className="service-card-link">
              <div className="service-card-item">
                <h3 tabIndex="0">Namankaran Sanskar</h3>
                <p>Choose the most auspicious name for your newborn based on astrological calculations, ensuring a prosperous and blessed future.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
