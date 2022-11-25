import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventsAPI } from '../../api/events/EventsAPI';

export const getAllEvents = createAsyncThunk('getAllEvents', async ({ type }) => {
    const res = await EventsAPI.getAll(type);
    // console.log("list events:", res.data);
    return res;
})

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        eventList: [],
        loadingEvent: false,
    },
    reducers: {},
    extraReducers: {
        [getAllEvents.pending]: (state, action) => {
            state.loadingEvent = true;
        },
        [getAllEvents.rejected]: (state, action) => {
            state.loadingEvent = false;
        },
        [getAllEvents.fulfilled]: (state, action) => {
            state.loadingEvent = false;
            state.eventList = action.payload.data;
            // console.log("data", action.payload.data);
        },
    }
})
const { reducer: eventReducer } = eventSlice;
export default eventReducer;