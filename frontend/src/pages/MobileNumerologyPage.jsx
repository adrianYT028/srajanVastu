import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const MobileNumerologyPage = () => {
  const description = `Mobile Numerology analyzes and suggests mobile numbers that align with your vibrations. Since mobile numbers are used daily, they strongly influence communication, opportunities, and relationships. The analysis checks compatibility with your core numbers to recommend the most favorable choice.`;

  const whoShouldAvail = [
    'Individuals choosing new mobile numbers.',
    'Business professionals relying heavily on communication.',
    'Anyone experiencing frequent obstacles or miscommunications.'
  ];

  const benefits = [
    'Attracts positive opportunities through communication.',
    'Enhances personal and professional relationships.',
    'Improves luck, success, and harmony in daily interactions.',
    'Helps avoid numbers that cause negativity or blockages.'
  ];

  const pricing = [
    { type: 'Quick Number Check', amount: '₹499', description: 'Compatibility check for an existing number.' },
    { type: 'Number Recommendation Pack', amount: '₹1,499', description: 'List of recommended numbers with reasoning and one follow-up.' }
  ];

  return (
    <ServiceDetailPage
      title="Mobile Numerology"
      description={description}
      whoShouldAvail={whoShouldAvail}
      benefits={benefits}
      pricing={pricing}
      ctaText="Get Mobile Number Suggestions"
    />
  );
};

export default MobileNumerologyPage;
