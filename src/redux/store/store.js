import { configureStore } from '@reduxjs/toolkit';
import eventDetailReducer from '../slice/eventDetailSlice';
import eventReducer from '../slice/eventSlice';
import ticketReducer from '../slice/ticketSlice';

const store = configureStore({
  reducer: {
    eventDetail: eventDetailReducer,
    events: eventReducer,
    tickets: ticketReducer,
  },
});

export default store;
