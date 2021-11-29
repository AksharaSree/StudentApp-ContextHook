import React from "react";
import {Link} from 'react-router-dom';

function SideBar() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link to="/dashboard" className="nav-link" >            
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>            
          </Link>
        </li>

        <li className="nav-item active">          
          <Link to="/all-students" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>All Students</span>
          </Link>
        </li>

        <li className="nav-item active">
        <Link to="/student-form" className="nav-link">          
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Student Form</span>
            </Link>
        </li>
      </ul>

      
    </div>
  );
}

export default SideBar;
