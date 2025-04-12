import React, { useEffect } from 'react';
import axios from 'axios';

const PlacementList = ({ opportunities, applyForJob, removeOpportunity }) => {
  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await axios.get('http://localhost:8081/Placement');
        opportunities(response.data); // Use the parent state to set opportunities
      } catch (error) {
        console.error('Error fetching placements:', error);
      }
    };

    fetchOpportunities();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/Placement/${id}`);
      removeOpportunity(id); // Remove the opportunity from the local state
    } catch (error) {
      console.error('Error deleting placement:', error);
    }
  };

  return (
    <div>
      <h2>Placement Opportunities</h2>
      <ul>
        {opportunities.map((opportunity) => (
          <li key={opportunity.id}>
            <h3>{opportunity.company}</h3>
            <p className="student-name">Student: {opportunity.student}</p>
            <p>{opportunity.jobTitle}</p>
            <p>{opportunity.location}</p>
            <button onClick={() => applyForJob(opportunity.id)}>Apply</button>
            <button onClick={() => handleDelete(opportunity.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlacementList;

