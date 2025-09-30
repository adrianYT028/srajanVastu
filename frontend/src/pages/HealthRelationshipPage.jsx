import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const HealthRelationshipPage = () => {
  const benefits = [
    "Improved physical and mental health",
    "Strengthened family relationships",
    "Better communication with loved ones",
    "Reduced conflicts and misunderstandings",
    "Enhanced emotional well-being",
    "Better sleep patterns and rest",
    "Improved marital harmony",
    "Stronger parent-child relationships"
  ];

  const process = [
    "Personal consultation and health assessment",
    "Relationship analysis and energy mapping",
    "Identification of health and relationship blocks",
    "Customized Vastu remedies and recommendations",
    "Implementation guidance for home changes",
    "Emotional healing and relationship counseling",
    "Ongoing support and relationship guidance"
  ];

  const pricing = [
    {
      type: "Health Consultation",
      amount: "₹3,500",
      description: "Personal health Vastu analysis"
    },
    {
      type: "Relationship Consultation",
      amount: "₹4,500",
      description: "Couple/family relationship assessment"
    },
    {
      type: "Health & Relationship Package",
      amount: "₹7,000",
      description: "Combined health and relationship analysis"
    }
  ];

  return (
    <ServiceDetailPage
      title="Vastu for Health & Relationship"
      description="Specialized Vastu remedies to enhance physical well-being, strengthen relationships, and create harmony in family life. Our expert consultants combine ancient Vastu wisdom with modern understanding to address both health and relationship challenges."
      benefits={benefits}
      process={process}
      pricing={pricing}
    />
  );
};

export default HealthRelationshipPage;
