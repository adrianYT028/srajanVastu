import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const BrahmNabhiPage = () => {
  const benefits = [
    "Establishment of spiritual center of property",
    "Enhanced positive energy flow",
    "Improved prosperity and abundance",
    "Better health and family harmony",
    "Protection from negative energies",
    "Strengthened property foundation",
    "Improved meditation and spiritual practices",
    "Enhanced door energy and protection"
  ];

  const process = [
    "Property analysis and center identification",
    "Brahm Nabhi point determination",
    "Sacred geometry calculations",
    "Installation of Brahm Nabhi stone/structure",
    "Door power (Dehleej Sthapna) enhancement",
    "Energy activation ceremony",
    "Ongoing energy maintenance guidance"
  ];

  const pricing = [
    {
      type: "Brahm Nabhi Installation",
      amount: "₹12,000",
      description: "Complete Brahm Nabhi establishment"
    },
    {
      type: "Door Power Enhancement",
      amount: "₹8,000",
      description: "Dehleej Sthapna for main entrance"
    },
    {
      type: "Complete Package",
      amount: "₹18,000",
      description: "Brahm Nabhi + Door Power + activation ceremony"
    }
  ];

  return (
    <ServiceDetailPage
      title="Brahm Nabhi & Dehleej Sthapna (Door Power)"
      description="Establish the spiritual center of your property and enhance door energies for maximum positive flow, protection, and prosperity. Brahm Nabhi is the spiritual heart of your property, and proper door energy ensures constant positive inflow."
      benefits={benefits}
      process={process}
      pricing={pricing}
    />
  );
};

export default BrahmNabhiPage;
