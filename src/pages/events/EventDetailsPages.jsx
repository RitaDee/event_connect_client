import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEventDetail } from '../../redux/slice/eventDetailSlice';

const EventDetails = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.eventDetail.event);
  // const isLoading = useSelector((state) => state.eventDetail.loading);
  // const error = useSelector((state) => state.eventDetail.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2 className="event_title">{event?.title}</h2>
      <p className="event_date">
        Date:
        {event?.date}
      </p>
      <p className="event_time">
        Time:
        {event?.time}
      </p>
      <p className="event_description">
        Description:
        {event?.description}
      </p>
    </div>
  );
};

export default EventDetails;
