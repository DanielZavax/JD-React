import React, { useState } from 'react';
import PlacementForm from './PlacementForm';
import PlacementList from './PlacementList';

const PlacementModule = () => {
  const [opportunities, setOpportunities] = useState([]);

  const addOpportunity = (newOpportunity) => {
    setOpportunities([...opportunities, newOpportunity]);
  };

  const removeOpportunity = (id) => {
    setOpportunities(opportunities.filter(opportunity => opportunity.id !== id));
  };

  const applyForJob = (jobId) => {
    alert(`Applied for job with ID: ${jobId}`);
  };

  return (
    <div>
      <PlacementForm addOpportunity={addOpportunity} />
      <PlacementList 
        opportunities={opportunities} 
        applyForJob={applyForJob} 
        removeOpportunity={removeOpportunity} // Pass down remove function
      />
    </div>
  );
};

export default PlacementModule;
