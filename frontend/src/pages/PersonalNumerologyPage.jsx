import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const PersonalNumerologyPage = () => {
  const benefits = [
    "Provides self-awareness and confidence.",
    "Helps make better career and personal choices.",
    "Identifies strengths and areas of improvement.",
    "Offers clarity for long-term planning."
  ];

  const pricing = [
    { type: "Basic Reading", amount: "₹1,500", description: "Life path and personality overview" },
    { type: "Detailed Report", amount: "₹2,500", description: "Full numerology report + recommendations" },
    { type: "Premium Consultation", amount: "₹4,000", description: "Detailed report + follow-up session" }
  ];

  return (
    <ServiceDetailPage
      title="Personal Numerology"
      description="This reading deciphers the influence of your date of birth and name. It calculates Life Path, Destiny, and Personality Numbers, and reveals strengths, challenges, and opportunities. A detailed report with practical guidance is shared to help make life decisions."
      whoShouldAvail={[
        "Anyone seeking clarity on their life direction.",
        "Students or professionals at a career crossroads.",
        "People facing repeated challenges or confusion in personal life."
      ]}
      benefits={benefits}
      pricing={pricing}
    />
  );
};

export default PersonalNumerologyPage;
