import React, { useEffect } from 'react';
import './BookingPage.css';

const BookingPage = () => {
  const googleFormUrl = 'https://forms.gle/yZesqruDwqSfRCgw9';

  const handleRedirect = () => {
    window.open(googleFormUrl, '_blank');
  };

  // Optional: Auto-redirect after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleRedirect();
    }, 2000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="redirect-content">
          <h1>Book an Appointment</h1>
          <div className="redirect-message">
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
            <h2>Redirecting to Booking Form...</h2>
            <p>
              We're taking you to our secure booking form where you can schedule 
              your consultation with our Vastu and Astrology experts.
            </p>
            <p className="redirect-timer">
              You'll be redirected automatically in a few seconds.
            </p>
            <button 
              onClick={handleRedirect}
              className="redirect-btn"
            >
              Go to Booking Form Now
            </button>
            <div className="business-hours">
              <h3>Consultation Hours</h3>
              <p className="hours-info">
                📅 Available Sunday to Saturday<br/>
                � 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
