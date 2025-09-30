import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const NamankaranSanskarPage = () => {
  const description = `Namankaran Sanskar, or New Born Child Name Setting, is one of the most sacred rituals in Vedic Astrology. It involves selecting a name for the newborn that resonates with favorable planetary influences, Nakshatra (birth star), and numerological vibrations. A well-chosen name ensures that the child’s life path is aligned with positivity, prosperity, and spiritual growth. The process includes preparing the Janam Kundli (birth chart), analyzing planetary positions, and identifying auspicious syllables and sounds for the name.`;

  const whoShouldAvail = [
    'Parents seeking an auspicious and meaningful name for their newborn child.',
    'Families wishing to perform the traditional Namankaran Sanskar ceremony with astrological precision.',
    'Anyone wanting the child’s name to support their destiny, health, and prosperity.'
  ];

  const benefits = [
    'Ensures the name harmonizes with the child’s horoscope and life path.',
    'Attracts good fortune, health, and spiritual blessings.',
    'Provides a strong foundation for success and happiness in life.',
    'Honors cultural and spiritual traditions with authenticity.'
  ];

  const pricing = [
    { type: 'Namankaran Consultation', amount: '₹1,999', description: 'Kundli-based name suggestions and ceremony guidance.' },
    { type: 'Premium Naming Package', amount: '₹4,499', description: 'Multiple name options, report, and ceremony timing.' }
  ];

  return (
    <ServiceDetailPage
      title="Namankaran Sanskar"
      description={description}
      whoShouldAvail={whoShouldAvail}
      benefits={benefits}
      pricing={pricing}
      ctaText="Request Namankaran Consultation"
    />
  );
};

export default NamankaranSanskarPage;
