import { configureStore } from '@reduxjs/toolkit';
import eventDetailReducer from '../slice/eventDetailSlice';

const store = configureStore({
  reducer: {
    eventDetail: eventDetailReducer,
  },
});

export default store;
