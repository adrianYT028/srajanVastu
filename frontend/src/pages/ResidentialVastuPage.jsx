import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const ResidentialVastuPage = () => {
  const benefits = [
    "Enhanced positive energy flow throughout your home",
    "Improved family harmony and relationships",
    "Better health and well-being for all residents",
    "Increased prosperity and financial stability",
    "Protection from negative energies and influences",
    "Better sleep quality and peaceful environment",
    "Improved concentration and productivity",
    "Strengthened family bonds and relationships"
  ];

  const process = [
    "Initial consultation and site analysis",
    "Detailed Vastu assessment of your property",
    "Identification of energy blocks and imbalances",
    "Personalized recommendations and remedies",
    "Implementation guidance and timeline",
    "Follow-up consultation to ensure proper implementation",
    "Ongoing support and adjustments as needed"
  ];

  const pricing = [
    {
      type: "Basic Consultation",
      amount: "₹2,500",
      description: "2-3 room assessment with basic recommendations"
    },
    {
      type: "Comprehensive Analysis",
      amount: "₹5,000",
      description: "Full home assessment with detailed report"
    },
    {
      type: "Premium Package",
      amount: "₹8,500",
      description: "Complete analysis + implementation guidance + 3 follow-ups"
    }
  ];

  return (
    <ServiceDetailPage
      title="Residential Vastu"
      description="Residential Vastu focuses on balancing the energy flow within homes, apartments, and plots. It includes assessing the placement of rooms, entrances, kitchens, and bedrooms. The process starts with a consultation to evaluate your current setup, identify imbalances, and provide practical corrections for harmony and well-being."
      whoShouldAvail={[
        "Homeowners planning to buy, rent, or build a house/apartment.",
        "Families experiencing frequent conflicts, stress, or health issues.",
        "Individuals seeking peace, prosperity, and harmony at home."
      ]}
      benefits={benefits}
      pricing={pricing}
    />
  );
};

export default ResidentialVastuPage;
