import React, { useState } from "react"; 
import "./Facultystudent.css";

const Facultystudent = () => {
  const [role, setRole] = useState('');

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected role:', role);
  };

  return (
    <div className="fs-container">
      <form className="fs-class" onSubmit={handleSubmit}>
        <h2 className="select-role">Select Your Role</h2>
        <div className="fs-div">
          <label className="radio-label">
            <input
              type="radio"
              name="role"
              value="faculty"
              checked={role === 'faculty'}
              onChange={handleChange}
            /> 
            Faculty 
          </label>
        </div>
        <div className="fs-div">
          <label className="radio-label">
            <input 
              type="radio"
              name="role"
              value="student"
              checked={role === 'student'}
              onChange={handleChange}
            /> 
            Student 
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}; 

export default Facultystudent;
