import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const HoroscopeAnalysisPage = () => {
  const description = `Astrology-based analysis of your natal chart reveals life patterns, planetary strengths, and challenges. It covers health, wealth, relationships, and career. Personalized remedies balance planetary influences using gemstones, mantras, rituals, and yantras. Recommendations are based on detailed horoscope analysis.`;

  const whoShouldAvail = [
    'Anyone seeking life direction and clarity.',
    'Individuals facing challenges in career, marriage, or health.',
    'Parents wanting insights into their children’s future.',
    'People affected by unfavorable planetary positions.',
    'Anyone looking for spiritual and practical solutions.'
  ];

  const benefits = [
    'Provides deep understanding of life’s journey.',
    'Helps in planning major life events.',
    'Identifies periods of challenges and opportunities.',
    'Neutralizes negative planetary effects.',
    'Attracts positivity, health, and prosperity.',
    'Provides spiritual and emotional strength.',
    'Ensures smoother life progress.',
    'Suggests remedies for better alignment.'
  ];

  const pricing = [
    { type: 'Basic Horoscope Analysis', amount: '₹1,499', description: 'Birth chart reading and major insights.' },
    { type: 'Comprehensive Report + Remedies', amount: '₹3,499', description: 'Detailed chart, timing, and personalized remedies.' }
  ];

  return (
    <ServiceDetailPage
      title="Horoscope Analysis"
      description={description}
      whoShouldAvail={whoShouldAvail}
      benefits={benefits}
      pricing={pricing}
      ctaText="Request Horoscope Analysis"
    />
  );
};

export default HoroscopeAnalysisPage;
