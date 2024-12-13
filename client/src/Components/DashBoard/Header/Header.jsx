import React from 'react';
import logo from '../../../assets/images/logo.png';
import userProfile from '../../../assets/images/image1.jpg'; 
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="SHAREtask Logo" className="headerlogo" />
        <span className="logo-title">Jewellery</span>
      </div>
      <div className="header-middle">
        <div className="search-wrapper">
          <input type="text" placeholder="Search here" className="search-input" />
          <i className="fas fa-search search-icon"></i> 
        </div>
      </div>
      <div className="header-right">
        <i className="fas fa-bell bell-icon"></i> 
        <img src={userProfile} alt="User Profile" className="user-profile-img" />
        <span className="username">@yashitht</span>
      </div>
    </header>
  );
}

export default Header;