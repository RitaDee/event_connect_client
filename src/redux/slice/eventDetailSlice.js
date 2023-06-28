import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://event-connect.onrender.com/api/v1/events';

// Async thunk to fetch event detail
export const fetchEventDetail = createAsyncThunk(
  'eventDetail/fetchEventDetail',
  async (eventId) => {
    const response = await axios.get(`${apiUrl}/${eventId}`);
    return response.data;
  },
);

const eventDetailSlice = createSlice({
  name: 'eventDetail',
  initialState: {
    event: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.event = action.payload;
      })
      .addCase(fetchEventDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default eventDetailSlice.reducer;
