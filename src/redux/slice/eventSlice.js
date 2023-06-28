// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const apiUrl = 'http://127.0.0.1:3000/api/v1/events';

// export const fetchEvents = createAsyncThunk(
//   'eventDetail/fetchEvents',
//   async () => {
//     const response = await axios.get(`${apiUrl}`);
//     return response.data;
//   },
// );

// export const createEvent = createAsyncThunk(
//   'eventDetail/createEvent',
//   async (data) => {
//     const response = await axios.post(`${apiUrl}`, { event: { ...data } });
//     return response;
//   },
// );

// const eventSlice = createSlice({
//   name: 'events',
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEvents.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchEvents.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchEvents.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(createEvent.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createEvent.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = [...state.data, action.payload];
//       })
//       .addCase(createEvent.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default eventSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3000/api/v1/events';

export const fetchEvents = createAsyncThunk(
  'eventDetail/fetchEvents',
  async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  },
);

export const createEvent = createAsyncThunk(
  'eventDetail/createEvent',
  async (data) => {
    const response = await axios.post(apiUrl, { event: { ...data } });
    return response;
  },
);

export const deleteEvent = createAsyncThunk(
  'eventDetail/deleteEvent',
  async (eventId) => {
    await axios.delete(`${apiUrl}/${eventId}`);
    return eventId;
  },
);

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((event) => event.id !== action.payload);
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default eventSlice.reducer;
