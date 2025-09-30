import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const AstrologyPage = () => {
  const benefits = [
    "Deep insights into your life purpose",
    "Career guidance and professional success",
    "Relationship and marriage predictions",
    "Health and wellness guidance",
    "Financial planning and wealth insights",
    "Education and learning opportunities",
    "Spiritual growth and development",
    "Remedies for planetary influences"
  ];

  const process = [
    "Birth chart creation and analysis",
    "Planetary position assessment",
    "Life prediction and guidance",
    "Remedy recommendations",
    "Future predictions and timelines",
    "Regular consultation and updates",
    "Spiritual guidance and support"
  ];

  const pricing = [
    {
      type: "Birth Chart Analysis",
      amount: "₹3,000",
      description: "Complete birth chart reading"
    },
    {
      type: "Life Prediction",
      amount: "₹5,000",
      description: "Detailed life predictions and guidance"
    },
    {
      type: "Annual Consultation",
      amount: "₹8,000",
      description: "Yearly guidance and predictions"
    }
  ];

  return (
    <ServiceDetailPage
      title="Astrology"
      description="Unlock profound insights into your destiny with comprehensive astrological consultations, birth chart readings, and future predictions. Our expert astrologers provide detailed analysis of planetary influences and offer remedies for a balanced and prosperous life."
      benefits={benefits}
      process={process}
      pricing={pricing}
    />
  );
};

export default AstrologyPage;
