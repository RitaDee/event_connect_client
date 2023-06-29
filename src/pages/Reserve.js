import React from 'react';
import { Link } from 'react-router-dom';
import dots from '../assets/dots.png';
import '../styles/reserve.css';

const Redirect = () => (
  <div className="redirect">
    <div className="redirect-section">
      <h1 className="redirect-list-title">RESERVE AN EVENT TO CONNECT</h1>
      <p className="redirect-list-subtitle">Please direct to an event details to reserve an event</p>
    </div>
    <div className="dots-wrapper">
      <img src={dots} alt="dots-bar" className="dots-bar" />
    </div>
    <Link to="/events" className="redirect-link">Go back to EVENTS</Link>
  </div>
);

export default Redirect;
