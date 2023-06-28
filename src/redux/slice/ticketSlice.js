/*eslint-disable*/
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = ' https://event-connect.onrender.com/api/v1/tickets';

export const fetchtickets = createAsyncThunk(
  'ticket/fetchtickets',
  async (id) => {
    const response = await axios.get(`${apiUrl}`);
    const data = response.data.filter((item) => item.event_id === Number(id));
    return data;
  }
);

export const createTicket = createAsyncThunk(
  'ticket/createTicket',
  async (data) => {
    const response = await axios.post(`${apiUrl}`, { ticket: data });
    return response.data;
  }
);


const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    data: [],
    loading: false,
    error: null,
    status: null,
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
        state.status = action.payload.status;
      })
      .addCase(fetchtickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.loading = false;
        console.log( [...state.data, action.payload], "tdggd")
        state.data = [...state.data, action.payload]
        state.status = action.payload.status;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ticketSlice.reducer;
