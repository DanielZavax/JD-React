import React, { useState } from 'react';
import axios from 'axios';

const PlacementForm = ({ addOpportunity }) => {
  const [studentName, setStudentName] = useState(''); 
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOpportunity = {
      student: studentName, // Use the studentName state here
      company: companyName,
      status: 'Open', // Default status
    };

    try {
      const response = await axios.post('http://localhost:8081/Placement', newOpportunity);
      addOpportunity(response.data); // Add the new opportunity to the state
      // Reset fields after submission
      setStudentName(''); // Clear the student name field
      setCompanyName('');
      setJobTitle('');
      setLocation('');
    } catch (error) {
      console.error('Error adding placement:', error);
    }
  };

  return (
    <div>
      <h2>Add New Placement Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)} // Update state on change
            required
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Opportunity</button>
      </form>
    </div>
  );
};

export default PlacementForm;
