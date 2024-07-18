import React, { useEffect, useState } from 'react';
import getProfile from "../doProfile";
import { useNavigate } from 'react-router-dom';
// import { PiUserCircleThin } from "react-icons/pi";
// import { CiLogout } from "react-icons/ci";
import { PiNotePencil } from "react-icons/pi";
import { Navigate, Link } from 'react-router-dom';
import "./css/Profile.css"

const ProfileComponent = ({ptoken}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    var pdata;
    
    async function getData() {
      pdata = await getProfile(ptoken);
      setData(pdata[0]);
    };
    //console.log("ProfileComponent received ptoken: " + ptoken);

    getData();
  }, []); // Adding ptoken as a dependency to run the effect when it changes

  if (data === null) {
    return <div>Loading...</div>;
  }

//   const navigate = useNavigate();

  const handleEditProfile = () => {
    useNavigate("/editprofile");
  };

  return (
    <div>
        <h1>Profile</h1>
        {/* <p><strong>Full Name:</strong> {data.full_name}</p> */}
        <div className='profile-container'>
            <div className='profile-info-div'>
                <label className='profile-info-label' htmlFor="name"> Full Name:</label>
                <input className='profile-info-input' type="text" id="name" name="name" defaultValue={data.full_name} readOnly/><br /><br />
            </div>

            <div className='profile-info-div'>
                <label  className='profile-info-label'htmlFor="email">Email:</label>
                <input  className='profile-info-input' type="text" id="email" name="email" defaultValue={data.email} readOnly/><br /><br />
            </div>

            <div className='profile-info-div'>
                <label  className='profile-info-label' htmlFor="account">Account:</label>
                <input  className='profile-info-input' type="text" id="account" name="account" defaultValue={data.account} readOnly /><br /><br />
            </div>

            <div className='profile-info-div'>
                <label className='profile-info-label' htmlFor="gradyear">Graduation Year:</label>
                <input className='profile-info-input' type="text" id="gradyear" name="gradyear" defaultValue={data.grad_year} readOnly/><br /><br />
            </div>

            <div className='profile-info-div'>
                <label className='profile-info-label' htmlFor="major">Major:</label>
                <input className='profile-info-input' type="text" id="major" name="major" defaultValue={data.major} readOnly/><br /><br />
            </div>

            <div className='profile-info-div'>
                <label className='profile-info-label' htmlFor="year">Year:</label>
                <input className='profile-info-input' type="text" id="year" name="year" defaultValue={data.year} readOnly/><br /><br />
            </div>

            <div className='profile-info-div'>
                <label className='profile-info-label' htmlFor="gender">Gender:</label>
                <input className='profile-info-input' type="text" id="gender" name="gender" defaultValue={data.gender} readOnly /><br /><br />
            </div>

            <div className='profile-info-div'>
                <label className='profile-info-label' htmlFor="web">Web Page:</label>
                <input className='profile-info-input' type="text" id="web" name="web" defaultValue={data.web_page} readOnly/><br /><br />
            </div>

            <div className='profile-info-div'>
                <label className='profile-info-label' htmlFor="linkedin">Linkedin Page:</label>
                <input className='profile-info-input' type="text" id="linkedin" name="linkedin" defaultValue={data.linkedin} readOnly/><br /><br />
            </div>

            <div className="profile-edit-container">
                <Link to="/editprofile" className='profile-edit'>
                    Edit Profile
                </Link>
            </div>

        </div>

            
    </div>
      
  );
};

export default ProfileComponent;
