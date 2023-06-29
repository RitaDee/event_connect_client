import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/style.css';
import '../styles/main.css';

const SideBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    navigate('/signin');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="sidebar-header">
        <div className="sidebar-header-icon">
          <img className="logo" src={logo} alt="Our logo" />
        </div>
      </div>
      <ul className={`sidebar-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="sidebar-item">
          <Link to="/events" className="link" onClick={toggleMenu}>
            EVENTS
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/add_event" className="link" onClick={toggleMenu}>
            ADD EVENT
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/delete" className="link" onClick={toggleMenu}>
            DELETE EVENT
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/reserve" className="link" onClick={toggleMenu}>
            RESERVE
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/reservations" className="link" onClick={toggleMenu}>
            MY RESERVATIONS
          </Link>
        </li>
        <li className="sidebar-item">
          <button
            type="button"
            className="link sign-out-side"
            onClick={handleSignOut}
          >
            SIGN OUT
          </button>
        </li>
      </ul>
      <button
        type="button"
        className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>
    </nav>
  );
};

export default SideBar;
