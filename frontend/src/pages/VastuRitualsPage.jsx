import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const VastuRitualsPage = () => {
  const benefits = [
    "Complete purification of living spaces",
    "Removal of negative energies and influences",
    "Spiritual consecration of property",
    "Enhanced positive energy flow",
    "Protection from evil spirits and negative forces",
    "Improved family harmony and peace",
    "Better health and prosperity",
    "Spiritual blessing and divine protection"
  ];

  const process = [
    "Pre-ritual consultation and preparation",
    "Sacred space preparation and cleansing",
    "Traditional Havan (fire ritual) ceremony",
    "Vastu Vidhan (spiritual ceremonies)",
    "Property consecration and blessing",
    "Energy activation and sealing",
    "Post-ritual guidance and maintenance"
  ];

  const pricing = [
    {
      type: "Basic Havan Ceremony",
      amount: "₹8,500",
      description: "Traditional fire ritual for home purification"
    },
    {
      type: "Complete Vastu Rituals",
      amount: "₹15,000",
      description: "Full ritual package with consecration"
    },
    {
      type: "Premium Spiritual Package",
      amount: "₹25,000",
      description: "Complete rituals + energy activation + follow-ups"
    }
  ];

  return (
    <ServiceDetailPage
      title="Vastu Havan, Vastu Vidhan & Vastu Registry"
      description="Sacred fire rituals, spiritual ceremonies, and proper documentation to purify and consecrate your space according to ancient traditions. Our traditional Vastu rituals create powerful spiritual protection and positive energy flow."
      benefits={benefits}
      process={process}
      pricing={pricing}
    />
  );
};

export default VastuRitualsPage;
