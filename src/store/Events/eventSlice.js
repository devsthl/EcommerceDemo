import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventsAPI } from '../../api/events/EventsAPI';

export const getAllEvents = createAsyncThunk('getAllEvents', async ({ type, index, size }) => {
    const res = await EventsAPI.getAll(type, index, size);
    console.log("list events:", res);
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
            state.eventList = action.payload;
        },
    }
})
const { reducer: eventReducer } = eventSlice;
export default eventReducer;