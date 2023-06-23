import { configureStore } from '@reduxjs/toolkit';
import eventDetailReducer from '../slice/eventDetailSlice';
import eventReducer from '../slice/eventSlice';

const store = configureStore({
  reducer: {
    eventDetail: eventDetailReducer,
    events: eventReducer,
  },
});

export default store;
