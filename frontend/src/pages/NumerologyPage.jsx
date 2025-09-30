import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const NumerologyPage = () => {
  const benefits = [
    "Personalized life path guidance",
    "Career and business success insights",
    "Relationship compatibility analysis",
    "Name correction for better opportunities",
    "Lucky numbers and dates identification",
    "Personal growth and development guidance",
    "Financial planning and wealth creation",
    "Health and wellness predictions"
  ];

  const process = [
    "Birth date and name analysis",
    "Life path number calculation",
    "Name numerology assessment",
    "Compatibility analysis if applicable",
    "Personalized recommendations and remedies",
    "Name correction suggestions",
    "Implementation guidance and timeline"
  ];

  const pricing = [
    {
      type: "Basic Numerology",
      amount: "₹2,000",
      description: "Birth date analysis and basic guidance"
    },
    {
      type: "Name Analysis",
      amount: "₹1,500",
      description: "Name numerology and correction"
    },
    {
      type: "Complete Package",
      amount: "₹3,000",
      description: "Full numerology analysis + name correction"
    }
  ];

  return (
    <ServiceDetailPage
      title="Numerology & Pronology Analysis"
      description="Discover your life path through expert numerological analysis and phonetic name corrections for personal and professional success. Our numerology consultations provide deep insights into your destiny and help you make informed decisions for a prosperous future."
      benefits={benefits}
      process={process}
      pricing={pricing}
    />
  );
};

export default NumerologyPage;
