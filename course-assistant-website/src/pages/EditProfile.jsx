import React, { useState, useContext, useEffect } from "react";
//import { AuthContext } from "../authContext";
import updateProfile from "../doUpdate";
import "./css/EditProfile.css";

// Categories
const EditProfile = ( {ptoken} ) => {

  //const { token } = useContext(AuthContext); // Use token from AuthContext

  const [data, setData] = useState({
    full_name: "",
    account: "",
    email: "",
    gender: "",
    major: "",
    year: "",
    grad_year: "",
    web_page: "",
    linkedin: "",
  });

  

  const [invalidN, setInvalidN] = useState(false);
  const [invalidE, setInvalidE] = useState(false);
  const [invalidGY, setInvalidGY] = useState(false);
  const [invalidG, setInvalidG] = useState(false);
  const [invalidM, setInvalidM] = useState(false);
  const [invalidY, setInvalidY] = useState(false);
  const [invalidW, setInvalidW] = useState(false);
  const [invalidL, setInvalidL] = useState(false);
  // const [updated] = false;

  const update = () => {
    let newProfile = {
      name: document.getElementById('name').value, 
      account: ptoken,
      email: document.getElementById('email').value, 
      gender: document.getElementById('gender').value, 
      major: document.getElementById('major').value, 
      year: document.getElementById('year').value, 
      grad: document.getElementById('gradyear').value, 
      web: document.getElementById('web').value, 
      linkedin: document.getElementById('linkedin').value, 
    };

    if (newProfile.web === ""){
      newProfile.web = "http://none";
    }
    if (newProfile.linkedin === ""){
      newProfile.linkedin = "https://linkedin.com/none";
    }

    const validLett = /^[a-zA-Z" "]+$/;
    const validBoth = /^[a-zA-Z0-9]+$/;
    const validEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    const validLink = /^https:\/\/linkedin\.com\/[a-zA-Z0-9]+$/;
    const validWeb = /^https?:\/\/[a-zA-Z0-9./]+$/;

    if (!validLett.test(newProfile.name)){
      setInvalidN(true);
      console.log("Found invalid name or account");
    } else if (!validLett.test(newProfile.major)){
      setInvalidM(true);
      console.log("Found invalid major");
    } else if (!validLett.test(newProfile.gender) && newProfile.gender !== "") {
      setInvalidG(true);
      console.log("Found invalid gender ");
    } else if (!validBoth.test(newProfile.year)){
      setInvalidY(true);
      console.log("Found invalid year");
    } else if (!validBoth.test(newProfile.grad)){
      setInvalidGY(true);
      console.log("Found invalid grad year ");
    } else if (!validEmail.test(newProfile.email)){
      setInvalidE(true);
      console.log("Found invalid email ");
    } else if (!validWeb.test(newProfile.web) && newProfile.web !== ""){
      setInvalidW(true);
      console.log("Found invalid web page ");
    } else if (!validLink.test(newProfile.linkedin) && newProfile.linkedin !== ""){
      setInvalidL(true);
      console.log("Found invalid LinkedIn page ");
    } else{
      console.log("calling updateProfile with:");
      console.log(newProfile);
      let rslt = updateProfile(newProfile);
      console.log("received from updateProfile: " + rslt);
    }
  }

  useEffect(() => {
    setInvalidN(false);
    setInvalidE(false);
    setInvalidGY(false);
    setInvalidG(false);
    setInvalidM(false);
    setInvalidY(false);
    setInvalidW(false);
    setInvalidL(false);
  }, []);


  return (
    <div>
      <h1 className='profile-header'>Edit Profile</h1>

      <div className="edit-profile-container">
        <div className="edit-profile-div">
          <label className="edit-profile-label"  htmlFor="name">Name:</label>
          <input className="edit-profile-input" type="text" id="name" name="name" /><br /><br />
        </div> 
        {invalidN && (<p className="bad-stuff"> Bad Name entered. </p>)}

        <div className="edit-profile-div">
          <label  className="edit-profile-label" htmlFor="email">Email:</label>
          <input className="edit-profile-input" type="text" id="email" name="email"  /><br /><br />
        </div> 
        {invalidE && (<p className="bad-stuff"> Bad email address entered. </p>)}

        
        

        <div className="edit-profile-div">
          <label className='edit-profile-label' htmlFor="gradyear">Graduation Year:</label>
          <input className='edit-profile-input' type="text" id="gradyear" name="gradyear"  /><br /><br />
          </div>
          {invalidGY && (<p className="bad-stuff"> Bad Graduation Year entered. </p>)}

        
        <div className="edit-profile-div">
          <label className='edit-profile-label' htmlFor="major">Major:</label>
          <input className='edit-profile-input' type="text" id="major" name="major"  /><br /><br />
        </div>
        {invalidM && (<p className="bad-stuff"> Bad Major entered. </p>)}

        
        <div className="edit-profile-div">
          <label className='edit-profile-label' htmlFor="year">Year:</label>
          <input className='edit-profile-input' type="text" id="year" name="year"  /><br /><br />
          </div>
          {invalidY && (<p className="bad-stuff"> Bad Year entered. </p>)} 


        

        <div className="edit-profile-div">
          <label className='edit-profile-label' htmlFor="gender">Gender:</label>
          <input className='edit-profile-input' type="text" id="gender" name="gender"  /><br /><br />
        </div>
        {invalidG && (<p className="bad-stuff"> Bad Gender entered. </p>)}


        <div className="edit-profile-div">
          <label className='edit-profile-label' htmlFor="web">Web Page:</label>
          <input className='edit-profile-input' type="text" id="web" name="web"  /><br /><br />
        </div>
        {invalidW && (<p className="bad-stuff"> Bad Web Page entered. </p>)}


        <div className="edit-profile-div">
          <label className='edit-profile-label' htmlFor="linkedin">LinkedIn Page:</label>
          <input className='edit-profile-input' type="text" id="linkedin" name="linkedin"  /><br /><br />
        </div>
        {invalidL && (<p className="bad-stuff"> Bad LinkedIn Page entered. </p>)}


        <button className="edit-profile-save-button" type="button" onClick={update}>
          Update Profile
        </button>
        {/* {updated && (<p> Updated Successfully!. </p>)} */}

    </div>
     
    </div>
  );
};

export default EditProfile;
