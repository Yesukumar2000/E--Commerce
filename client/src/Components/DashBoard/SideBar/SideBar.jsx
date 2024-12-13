import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <>
      <aside className="sidebar">
        <ul>
          <li><a href="#Dashboard"><i className="fas fa-tachometer-alt icon"></i> Dashboard</a></li>
          <li><a href="#Projects"><i className="fas fa-project-diagram icon"></i> Projects</a></li>
          <li><a href="#Work"><i className="fas fa-clipboard-list icon"></i> My Work</a></li>
          <li><a href="/Dates"><i className="fas fa-calendar-check icon"></i> Due Dates</a></li>
          <li><a href="/Account"><i className="fas fa-user icon"></i> My Account</a></li>
          <li><a href="/Profile"><i className="fas fa-user icon"></i> My Profile</a></li>
          <li><a href="/Team"><i className="fas fa-users icon"></i> My Team</a></li>
          <li><a href="/Link"><i className="fas fa-link icon"></i> Invite Link</a></li>
          <li><a href="/Notification"><i className="fas fa-bell icon"></i> Notification Settings</a></li>
          <li><a href="/Password"><i className="fas fa-key icon"></i> Change Password</a></li>
          <li><a href="/fq"><i className="fas fa-question-circle icon"></i> FAQ</a></li>
          <li><a href="/Privacy"><i className="fas fa-file-alt icon"></i> Privacy Policy</a></li>
          <li><a href="/tandc"><i className="fas fa-file-alt icon"></i> T&C</a></li>
          <li><a href="/"><i className="fas fa-sign-out-alt icon"></i> Logout</a></li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;