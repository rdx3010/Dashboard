import React from 'react';
import './style.css';
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import profile from '../assets/profile.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="searchBar">
      <IoSearch/>
      <input type="text" placeholder="Search..."  style={{border:'none'}}/>

      </div>
      <div className="userSection">
        <div className="notificationIcon">
          <IoIosNotifications/>
        </div>
        <div className="profileInfo">
          <img src={profile}alt="Profile" />
          <span>Rohit</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
