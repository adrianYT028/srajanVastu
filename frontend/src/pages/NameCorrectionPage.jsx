import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const NameCorrectionPage = () => {
  const description = `Name Correction balances vibrations of personal or business names with numerology principles. Even small spelling or structural changes can significantly alter life’s direction. Corrections are suggested after analyzing compatibility with Life Path and Destiny Numbers.`;

  const whoShouldAvail = [
    'Individuals facing recurring struggles in career, health, or relationships.',
    'Parents naming newborns or changing children’s names.',
    'Entrepreneurs or professionals seeking better recognition and growth.'
  ];

  const benefits = [
    'Opens new opportunities in career and finance.',
    'Improves relationships and social recognition.',
    'Builds confidence and mental clarity.',
    'Enhances brand success and recall in business.',
    'Supports health, stability, and overall well-being.'
  ];

  const pricing = [
    { type: 'Standard Name Correction', amount: '₹1,200', description: 'Basic analysis and suggested corrections.' },
    { type: 'Detailed Name + Report', amount: '₹2,500', description: 'Comprehensive analysis with a written report and follow-up session.' }
  ];

  return (
    <ServiceDetailPage
      title="Name Correction"
      description={description}
      whoShouldAvail={whoShouldAvail}
      benefits={benefits}
      pricing={pricing}
      ctaText="Request Name Correction"
    />
  );
};

export default NameCorrectionPage;
