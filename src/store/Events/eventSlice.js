import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventsAPI } from '../../api/events/EventsAPI';

export const getAllEvents = createAsyncThunk('getAllEvents', async () => {
    const res = await EventsAPI.getAll();
    // console.log("list events:", res);
    return res;
})
export const getAllEventsWithPag = createAsyncThunk('getAllEventsWithPag', async ({ index, size }) => {
    const res = await EventsAPI.getAllwithPag(index, size);
    // console.log("list events:", res.data);
    return res;
})

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        eventList: [],
        eventListWithPag: [],
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
        [getAllEventsWithPag.pending]: (state, action) => {
            state.loadingEvent = true;
        },
        [getAllEventsWithPag.rejected]: (state, action) => {
            state.loadingEvent = false;
        },
        [getAllEventsWithPag.fulfilled]: (state, action) => {
            state.loadingEvent = false;
            state.eventListWithPag = action.payload.data;
        },
    }
})
const { reducer: eventReducer } = eventSlice;
export default eventReducer;