import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const AdvanceEnergyVastuPage = () => {
  const benefits = [
    "Energizes the entire property with positive vibrations.",
    "Removes negative energies and blockages.",
    "Strengthens the central energy (Brahmasthan) of the space.",
    "Brings prosperity, health, and holistic growth."
  ];

  const process = [
    "Energy assessment and aura reading",
    "Identification of energy imbalances",
    "Advanced cleansing rituals and ceremonies",
    "Cosmic healing and energy alignment",
    "Spiritual protection measures",
    "Ongoing energy maintenance guidance",
    "Regular energy check-ups and adjustments"  ];

  const pricing = [
    {
      type: "Energy Assessment",
      amount: "₹4,000",
      description: "Complete energy analysis and basic cleansing"
    },
    {
      type: "Advanced Cleansing",
      amount: "₹7,500",
      description: "Deep energy cleansing and healing"
    },
    {
      type: "Premium Energy Package",
      amount: "₹12,000",
      description: "Complete energy transformation + 6-month support"
    }
  ];

  return (
    <ServiceDetailPage
      title="Advance Energy Vastu"
      description="Advance Vastu goes beyond standard corrections to deeply harmonize the energy of a property. Techniques include Vastu Havan, Vastu Vidhan, and Vastu Registry, along with Brahm Nabhi Activation (central energy alignment), Dehleej Sthapna (door power), and Energy Booster Cube (Chabutra) Sthapna. These rituals and placements recharge and balance energy flow in a powerful way."
      whoShouldAvail={[
        "Home or business owners with persistent issues despite basic Vastu corrections.",
        "People moving into new properties for powerful energy activation.",
        "Anyone seeking enhanced prosperity, spiritual balance, and success."
      ]}
      benefits={benefits}
      process={process}
      pricing={pricing}
    />
  );
};

export default AdvanceEnergyVastuPage;
