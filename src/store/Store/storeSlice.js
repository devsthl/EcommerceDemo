import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StoreAPI } from "../../api/store/StoreAPI";

export const getStoreById = createAsyncThunk('getStoreById', async (id) => {
    const res = await StoreAPI.getStoreById(id)
    // console.log("storebyid:", res);
    return res
})

const storeSlice = createSlice({
    name: 'store',
    initialState: {
        storeById: [],
        loadingStore: false
    },
    reducers: {},
    extraReducers: {
        [getStoreById.pending]: (state, action) => {
            state.loadingStore = true;
        },
        [getStoreById.rejected]: (state, action) => {
            state.loadingStore = false;
        },
        [getStoreById.fulfilled]: (state, action) => {
            state.loadingStore = false;
            state.storeById = action.payload.data;
        },
    }
})
const { reducer: storeReducer } = storeSlice;
export default storeReducer;