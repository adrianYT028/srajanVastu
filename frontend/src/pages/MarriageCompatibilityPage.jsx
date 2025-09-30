import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const MarriageCompatibilityPage = () => {
  const description = `This service uses Kundli matching and planetary analysis to assess compatibility between partners. It identifies strengths, challenges, and remedies for long-term marital harmony.`;

  const whoShouldAvail = [
    'Couples planning marriage.',
    'Families seeking compatibility for arranged marriages.',
    'Married couples experiencing relationship challenges.'
  ];

  const benefits = [
    'Ensures strong compatibility and understanding.',
    'Reduces chances of conflicts or mismatches.',
    'Suggests remedies to strengthen relationships.',
    'Brings peace and long-term marital happiness.'
  ];

  const pricing = [
    { type: 'Compatibility Report', amount: '₹1,499', description: 'Kundli matching and brief remedies.' },
    { type: 'Detailed Compatibility + Remedies', amount: '₹3,499', description: 'In-depth analysis with personalized remedies.' }
  ];

  return (
    <ServiceDetailPage
      title="Marriage & Compatibility"
      description={description}
      whoShouldAvail={whoShouldAvail}
      benefits={benefits}
      pricing={pricing}
      ctaText="Request Compatibility Report"
    />
  );
};

export default MarriageCompatibilityPage;
