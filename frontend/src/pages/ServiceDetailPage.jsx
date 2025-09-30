import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetailPage.css';

const ServiceDetailPage = ({ title, description, benefits, process, whoShouldAvail, ctaText = "Book Consultation" }) => {
  return (
    <div className="service-detail-page">
      <div className="service-detail-container">
        {/* Back Navigation */}
        <div className="back-navigation">
          <Link to="/services" className="back-link">
            ← Back to Services
          </Link>
        </div>

        {/* Service Header */}
        <div className="service-header">
          <h1>{title}</h1>
          <p className="service-intro">{description}</p>
        </div>

        {/* Service Content */}
        <div className="service-content">
          {/* Benefits Section */}
          {/* Who should avail Section */}
          {whoShouldAvail && (
            <section className="service-section">
              <h2>Who should avail</h2>
              <ul className="who-list">
                {whoShouldAvail.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          {benefits && (
            <section className="service-section">
              <h2>Benefits</h2>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Process Section */}
          {process && (
            <section className="service-section">
              <h2>Our Process</h2>
              <ol className="process-list">
                {process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </section>
          )}

          {/* Call to Action */}
          <section className="service-cta">
            <h2>Ready to Get Started?</h2>
            <p>Take the first step towards positive change in your life.</p>
            <Link to="/booking" className="cta-button">
              {ctaText}
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
