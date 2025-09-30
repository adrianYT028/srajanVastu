import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const CareerBusinessGuidancePage = () => {
  const description = `Astrological analysis of the 10th house, planetary dashas, and transits helps identify suitable careers and business ventures. Personalized reports provide clarity on job changes, promotions, or expansion opportunities.`;

  const whoShouldAvail = [
    'Students and professionals at career crossroads.',
    'Entrepreneurs planning new ventures.',
    'Individuals seeking growth or job stability.'
  ];

  const benefits = [
    'Identifies best career paths aligned with your chart.',
    'Provides favorable timings for career changes.',
    'Reduces risks in business decisions.',
    'Ensures long-term professional stability.'
  ];

  const pricing = [
    { type: 'Career Snapshot', amount: '₹999', description: 'Quick career alignment report.' },
    { type: 'Detailed Career & Business Plan', amount: '₹2,999', description: 'In-depth analysis with timings and remedies.' }
  ];

  return (
    <ServiceDetailPage
      title="Career & Business Guidance"
      description={description}
      whoShouldAvail={whoShouldAvail}
      benefits={benefits}
      pricing={pricing}
      ctaText="Request Career Guidance"
    />
  );
};

export default CareerBusinessGuidancePage;
