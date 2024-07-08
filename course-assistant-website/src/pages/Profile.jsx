// import React from 'react';
// import SectionHeading from '../components/heading/sectionHeading';

// const Profile = () => {
//   return (
//     <>
//     <SectionHeading title="Profile" />
//     </>
//   );
// };

// export default Profile;



import React from 'react';
import "./css/Profile.css";
import { useNavigate } from 'react-router-dom';
import { PiUserCircleThin } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { PiNotePencil } from "react-icons/pi";
import { Link } from 'react-router-dom';


const Profile = () => {
 const navigate = useNavigate();

 const handleEditProfile = () => {
   navigate("/editprofile");
 };

 return (
   <div className='profile-container'>
       <div className='profile-profile'>
       <h1>
         Profile
       </h1>
     </div>
     <div className='profile-icon'>
       <PiUserCircleThin />  
     </div>  
   
     <div className='profile-info'>
       <h2 className='profile-username'>
         Vanessa Sharma
       </h2>  
       <p>Email Address:</p> <br/>
       <p>Graduation Year:</p> <br/>
       <p>Personal Website:</p> <br/>
       <p>Class Year:</p> <br/>
       <p>LinkedIn:</p>

     </div> 
     <button className='profile-logout'> <CiLogout />  Log Out</button> 
     <Link to="/editprofile">
     <button onClick={handleEditProfile} className='profile-edit'>
       <PiNotePencil /> Edit Profile
     </button>
     </Link>
   </div>
 );
};

export default Profile;