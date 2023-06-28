import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/style.css';
import '../styles/main.css';

const SideBar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <nav>
      <div className="sidebar-header">
        <div className="sidebar-header-icon">
          <img className="logo" src={logo} alt="Our logo" />
        </div>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/events" className="link">
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
        <li className="sidebar-item">
          <Link to="/reservations" className="link">
            <button
              type="button"
              className="link sign-out-side"
              onClick={handleSignOut}
            >
              SIGN OUT
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
