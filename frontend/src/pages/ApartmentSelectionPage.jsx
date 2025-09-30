import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const ApartmentSelectionPage = () => {
  const benefits = [
    "Helps select the most auspicious flat with positive energy.",
    "Prevents future conflicts, health issues, or financial instability.",
    "Ensures better harmony, prosperity, and mental peace.",
    "Saves cost and effort by avoiding Vastu-deficient flats."
  ];

  const process = [
    "Initial consultation and requirement analysis",
    "Property shortlisting based on Vastu criteria",
    "On-site Vastu evaluation of selected properties",
    "Detailed floor plan and layout analysis",
    "Surrounding environment and neighborhood assessment",
    "Comparative Vastu scoring of options",
    "Final recommendation with improvement suggestions"
  ];

  const pricing = [
    {
      type: "Single Property Analysis",
      amount: "₹3,000",
      description: "Complete Vastu evaluation of one apartment/flat"
    },
    {
      type: "Multiple Properties (3-5)",
      amount: "₹8,000",
      description: "Comparative analysis of 3-5 properties with ranking"
    },
    {
      type: "Premium Selection Package",
      amount: "₹15,000",
      description: "Comprehensive service including site visits and detailed reports"
    }
  ];

  return (
    <ServiceDetailPage
      title="Apartment / Flat Selection"
      description="Apartment / Flat Selection Vastu ensures that the chosen flat aligns with positive energy principles before purchase or rental. Since high-rise apartments limit structural changes, the focus is on evaluating entrance direction, floor level, kitchen and bedroom placement, ventilation, natural light, and overall energy flow. A detailed analysis helps clients choose the most auspicious flat for long-term prosperity and peace."
      whoShouldAvail={[
        "Families or individuals planning to buy or rent a flat/apartment.",
        "Real estate investors looking for high-energy and profitable properties.",
        "People experiencing confusion in choosing between multiple options."
      ]}
      benefits={benefits}
      process={process}
      pricing={pricing}
    />
  );
};

export default ApartmentSelectionPage;
