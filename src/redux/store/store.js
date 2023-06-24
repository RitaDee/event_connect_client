import { configureStore } from '@reduxjs/toolkit';
import eventDetailReducer from '../slice/eventDetailSlice';
import eventReducer from '../slice/eventSlice';
import ticketReducer from '../slice/ticketSlice';
import reservationReducer from '../slice/reservationSlice';

const store = configureStore({
  reducer: {
    eventDetail: eventDetailReducer,
    events: eventReducer,
    tickets: ticketReducer,
    reservations: reservationReducer,
  },
});

export default store;
