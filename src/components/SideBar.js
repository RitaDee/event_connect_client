/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/style.css';
import '../styles/main.css';

const SideBar = () => (
  <nav>
    <div className="sidebar-header">
      <div className="sidebar-header-icon">
        <img className="logo" src={logo} alt="Our logo" />
      </div>
    </div>
    <ul className="sidebar-list">
      <li className="sidebar-item">
        <Link to="/" className="link">
          EVENTS
        </Link>
      </li>
      <li className="sidebar-item">
        <Link to="/add_event" className="link">
          ADD EVENT
        </Link>
      </li>
      <li className="sidebar-item">
        <Link to="/events/delete" className="link">
          DELETE EVENT
        </Link>
      </li>
      <li className="sidebar-item">
        <Link to="/reserve" className="link">
          RESERVE
        </Link>
      </li>
      <li className="sidebar-item">
        <Link to="/reservations" className="link">
          MY RESERVATIONS
        </Link>
      </li>
    </ul>
    {/* line 30 needs to be checked */}
    <Link to="/signin" className="link sign-out-side">
      Sign Out
    </Link>
  </nav>
);

export default SideBar;
