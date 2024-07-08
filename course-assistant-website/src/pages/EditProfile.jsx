import React, { useState } from 'react';
import "./css/EditProfile.css"

const EditProfile = () => {
 const currentYear = new Date().getFullYear();
 const years = Array.from({ length: 10 }, (_, i) => currentYear + i).filter(year => year >= 2024);
 const classYears = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

 const [formData, setFormData] = useState({
   email: '',
   graduationYear: years[0],
   classYear: classYears[0],
   linkedin: '',
   personalWebsite: '',
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevFormData) => ({
     ...prevFormData,
     [name]: value,
   }));
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log(formData);
   // Add your form submission logic here TO send data to the server
 };

 return (
   <form onSubmit={handleSubmit}>
     <h1 className='profile-header'>Edit Profile</h1>

     
   <div className="edit-profile-container">
     <div className='edit-profile-div'>
       <label className='edit-profile-label'>Email Address:</label>
       <input
         className='edit-profile-input'
         type="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
       />
     </div>



     <div className='edit-profile-div'>
       <label className='edit-profile-label'>Graduation Year:</label>
       <select
         className='edit-profile-select'
         name="graduationYear"
         value={formData.graduationYear}
         onChange={handleChange}
       >
         {years.map((year) => (
           <option key={year} value={year}>
             {year}
           </option>
         ))}
       </select>
     </div>



     <div className='edit-profile-div'>
       <label className='edit-profile-label'>Class Year:</label>
       <select
         className='edit-profile-select'
         name="classYear"
         value={formData.classYear}
         onChange={handleChange}
       >
         {classYears.map((year) => (
           <option key={year} value={year}>
             {year}
           </option>
         ))}
       </select>
     </div>



     <div className='edit-profile-div'>
       <label className='edit-profile-label'>LinkedIn:</label>
       <input
         className='edit-profile-input'
         type="url"
         name="linkedin"
         value={formData.linkedin}
         onChange={handleChange}
       />
     </div>



     <div className='edit-profile-div'>
       <label className='edit-profile-label'>Personal Website:</label>
       <input
         className='edit-profile-input'
         type="url"
         name="personalWebsite"
         value={formData.personalWebsite}
         onChange={handleChange}
       />
     </div>


     <button className='edit-profile-save-button' type="submit">Save</button>
     </div>
   </form>
 );
};

export default EditProfile;