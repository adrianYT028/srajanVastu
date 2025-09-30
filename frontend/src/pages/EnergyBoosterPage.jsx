import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const EnergyBoosterPage = () => {
  const benefits = [
    "Amplified positive energy vibrations",
    "Enhanced prosperity and abundance",
    "Strengthened property energy foundation",
    "Improved business success and growth",
    "Better concentration and productivity",
    "Protection from negative influences",
    "Enhanced meditation and spiritual practices",
    "Balanced energy flow throughout space"
  ];

  const process = [
    "Energy assessment and analysis",
    "Strategic location identification",
    "Sacred geometry calculations",
    "Energy booster cube installation",
    "Chabutra (platform) construction",
    "Energy activation and programming",
    "Regular energy monitoring and adjustments"
  ];

  const pricing = [
    {
      type: "Basic Energy Booster",
      amount: "₹6,000",
      description: "Single energy booster installation"
    },
    {
      type: "Multiple Boosters",
      amount: "₹15,000",
      description: "3-5 energy boosters for larger properties"
    },
    {
      type: "Premium Energy System",
      amount: "₹25,000",
      description: "Complete energy booster network + monitoring"
    }
  ];

  return (
    <ServiceDetailPage
      title="Energy Booster Cube (Chabutra) Sthapna"
      description="Strategic installation of energy amplification cubes to boost positive vibrations and strengthen your space's energetic foundation. Our energy booster systems create powerful positive energy fields that enhance prosperity and protection."
      benefits={benefits}
      process={process}
      pricing={pricing}
    />
  );
};

export default EnergyBoosterPage;
