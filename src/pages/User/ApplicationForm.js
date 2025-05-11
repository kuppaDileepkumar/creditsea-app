import React, { useState } from 'react';
import axios from 'axios';
import './ApplicationForm.css'; // <-- Import CSS here

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/applications', formData);
      alert('Application submitted!');
    } catch (error) {
      console.error('Error:', error);
      alert('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplicationForm;
