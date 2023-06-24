// eslint-disable
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3000/api/v1/tickets';

export const fetchtickets = createAsyncThunk(
  'ticket/fetchtickets',
  async () => {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  },
);

export const createTicket = createAsyncThunk(
  'ticket/fetchtickets',
  async (data) => {
    const response = await axios.post(`${apiUrl}`, { ticket: data });
    console.log(response, 'this is the response');
    return response.data;
  },
);

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchtickets.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchtickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ticketSlice.reducer;
