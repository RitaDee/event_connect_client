/*eslint-disable*/
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3000/api/v1/reservations';

export const fetchReservations = createAsyncThunk(
  'reservation/fetchReservations',
  async (id) => {
    const response = await axios.get(`${apiUrl}`);
    const data = response.data.filter((item) => item.user_id === Number(id));
    return data;
  }
);

export const createReservation = createAsyncThunk(
  'reservation/createReservations',
  async (data) => {
    const response = await axios.post(`${apiUrl}`, { reservation: data });
    return response.data;
  }
);

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    data: [],
    loading: false,
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.status = action.payload.status;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
