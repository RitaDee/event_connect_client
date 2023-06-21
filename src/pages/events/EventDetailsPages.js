import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvent } from '../../redux/slice/eventDetailSlice.reducer';

const EventDetail = ({ eventId }) => {
  const event = useSelector((state) => state.eventDetail.event);
  const isLoading = useSelector((state) => state.eventDetail.loading);
  const error = useSelector((state) => state.eventDetail.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvent(eventId));
  }, [dispatch, eventId]);

  // const handleReserveClick = () => {
  //   dispatch(reserveTickets(eventId)).then((response) => {
  //     // Check if the reservation was successful or if there was an error
  //     if (response.payload && response.payload.success) {
  //       // Reservation successful
  //       alert('Tickets reserved successfully!');
  //     } else {
  //       // Reservation failed
  //       alert('Failed to reserve tickets. Please try again.');
  //     }
  //   });
  // };

  if (isLoading) {
    return <div>Loading event details...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <p>
        Date:
        {event.date}
      </p>
      <p>
        Time:
        {event.time}
      </p>
      <p>
        Description:
        {event.description}
      </p>
      {/* <button type="button" onClick={handleReserveClick}>Reserve Tickets</button> */}
    </div>
  );
};

EventDetail.propTypes = {
  eventId: PropTypes.string.isRequired,
};

export default EventDetail;
