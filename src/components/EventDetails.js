import React from 'react';
import PropTypes from 'prop-types';

function EventDetails({ event }) {
  return (
    <div>
      <h2 className="event_title">{event.title}</h2>
      <p className="event_date">
        Date:
        {event.date}
      </p>
      <p className="event_time">
        Time:
        {event.time}
      </p>
      <p className="event_description">
        Description:
        {event.description}
      </p>
    </div>
  );
}

EventDetails.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventDetails;
