import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const CommercialVastuPage = () => {
  const benefits = [
    "Attracts financial stability and business growth.",
    "Improves employee productivity and motivation.",
    "Enhances client/customer satisfaction and trust.",
    "Reduces workplace conflicts and obstacles."
  ];

  const process = [
    "Business consultation and site assessment",
    "Detailed Vastu analysis of commercial property",
    "Identification of business energy blocks",
    "Industry-specific Vastu recommendations",
    "Implementation strategy for business growth",
    "Employee placement optimization",
    "Regular follow-ups and business monitoring"
  ];

  const pricing = [
    {
      type: "Office Consultation",
      amount: "₹7,500",
      description: "Complete office Vastu analysis and recommendations"
    },
    {
      type: "Shop/Showroom Analysis",
      amount: "₹5,500",
      description: "Retail space optimization for better sales"
    },
    {
      type: "Business Premium Package",
      amount: "₹12,000",
      description: "Full analysis + implementation + 6-month support"
    }
  ];

  return (
    <ServiceDetailPage
      title="Commercial Vastu"
  description="Commercial Vastu optimizes offices, shops, industries, and business spaces for growth and stability. It involves analyzing layouts, seating arrangements, entrances, and energy flow. Corrections are suggested to improve productivity, customer inflow, and financial success."
      whoShouldAvail={[
        "Business owners and entrepreneurs looking to increase profitability.",
        "Managers aiming to improve employee productivity and workplace harmony.",
        "Retailers and shopkeepers seeking better customer flow and sales.",
        "Companies facing frequent internal conflicts or operational blockages."
      ]}
      benefits={benefits}
      pricing={pricing}
    />
  );
};

export default CommercialVastuPage;
