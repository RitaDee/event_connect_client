import React, { useRef } from 'react';
import dots from '../assets/dots.png';
import '../styles/main.css';
import left from '../assets/arrow-left.png';
import right from '../assets/arrow-right.png';

const Main = () => {
  const eventsContainerRef = useRef(null);

  const scrollLeft = () => {
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollLeft -= eventsContainerRef.current.offsetWidth / 3;
    }
  };

  const scrollRight = () => {
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollLeft += eventsContainerRef.current.offsetWidth / 3;
    }
  };

  return (
    <div className="main-bar">
      <div className="main">
        <h1 className="event-list-title">BROWSE EVENTS</h1>
        <p className="event-list-subtitle">Select a event to see details or reserve</p>
        <div className="dots-wrapper">
          <img src={dots} alt="dots-bar" className="dots-bar" />
        </div>

        <div className="arrow-buttons-container">
          <button className="arrow-button arrow-left" onClick={scrollLeft} type="button">
            <img src={left} alt="arrow-left" className="arrow-left" />
          </button>
          <button className="arrow-button arrow-right" onClick={scrollRight} type="button">
            <img src={right} alt="arrow-right" className="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
