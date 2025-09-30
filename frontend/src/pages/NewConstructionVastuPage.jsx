import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';

const NewConstructionVastuPage = () => {
  const benefits = [
    "Prevents energy blockages and imbalances.",
    "Ensures long-term prosperity and harmony.",
    "Provides smoother construction progress.",
    "Saves cost and effort by avoiding later corrections."
  ];

  const process = [
    "Site analysis and plot evaluation",
    "Vastu-compliant architectural planning",
    "Foundation ceremony and muhurat selection",
    "Construction phase Vastu supervision",
    "Room-wise Vastu implementation",
    "Final Vastu compliance verification",
    "Post-construction energy activation rituals"
  ];

  const pricing = [
    {
      type: "Plot Analysis",
      amount: "₹5,000",
      description: "Complete site evaluation and basic planning guidance"
    },
    {
      type: "Architectural Consultation",
      amount: "₹15,000",
      description: "Detailed Vastu-compliant building design and planning"
    },
    {
      type: "Complete Construction Guidance",
      amount: "₹25,000",
      description: "Full project supervision from foundation to completion"
    }
  ];

  return (
    <ServiceDetailPage
      title="Vastu for New Constructions"
      description="This service ensures that buildings are aligned with positive energy from the design stage. It includes reviewing land selection, preparing energy-aligned layouts, and guiding architects during construction. Special attention is given to room placements, entrances, utilities, and energy zones."
      whoShouldAvail={[
        "Individuals/families constructing new homes.",
        "Builders and developers planning residential/commercial projects.",
        "Business owners setting up new offices, factories, or warehouses"
      ]}
      benefits={benefits}
      pricing={pricing}
    />
  );
};

export default NewConstructionVastuPage;
