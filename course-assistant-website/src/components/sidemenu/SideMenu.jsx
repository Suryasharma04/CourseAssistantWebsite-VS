import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome, IoSchool, IoChatbox, IoPerson, IoHelpCircle, IoArrowBackCircle, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { FaRobot } from "react-icons/fa6";
import './SideMenu.css';

const SideMenu = ({token, onLogout}) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    const userConfirmed = window.confirm("Are you sure you want to logout?");
    if (userConfirmed) {
      onLogout();
      history.push('/login');
    }
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
       <div onClick={handleToggleSidebar} className={`toggle-btn ${collapsed ? 'collapsed' : ''}`}>
        {collapsed ? <IoChevronForward className='icon' /> : <IoChevronBack className='icon'/>}
      </div> 
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home" activeclassname="active">
              <IoHome /> <span className="link-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/course" activeclassname="active">
              <IoSchool /> <span className="link-text">Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/bomber-buddy" activeclassname="active">
              <FaRobot /> <span className="link-text">Bomber Buddy</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/discussion" activeclassname="active">
              <IoChatbox /> <span className="link-text">Discussion</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeclassname="active">
              <IoPerson /> <span className="link-text">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" activeclassname="active">
              <IoHelpCircle /> <span className="link-text">Help</span>
            </NavLink>
          </li>
          <li>
            {token && (<NavLink to="/logout" activeclassname="active" onClick={handleLogoutClick}>
              <IoArrowBackCircle /> <span className="link-text">Logout</span>
            </NavLink>)}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
