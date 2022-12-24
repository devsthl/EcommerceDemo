import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddressAPI } from "../../api/address/AddressAPI";

export const getAllCities = createAsyncThunk('getAllCities', async () => {
    const res = await AddressAPI.getAllCities()
    // console.log("cities", res);
    return res;
})

export const getAllDistrict = createAsyncThunk('getAllDistrict', async (id) => {
    const res = await AddressAPI.getAllDistrict(id)
    // console.log("districtfefef:", res);
    return res;
})
export const getAllWards = createAsyncThunk('getAllWards', async (id) => {
    const res = await AddressAPI.getAllWards(id)
    // console.log("district:", res);
    return res;
})
export const getAllAddress = createAsyncThunk('getAllAddress', async () => {
    const res = await AddressAPI.getAllAddress()
    // console.log("address:", res.data);
    return res;
})
const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addressList: [],
        citiesList: [],
        districtList: [],
        wardsList: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [getAllCities.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllCities.rejected]: (state, action) => {
            state.loading = false;
        },
        [getAllCities.fulfilled]: (state, action) => {
            state.loading = false;
            state.citiesList = action.payload.data;
        },
        [getAllDistrict.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllDistrict.rejected]: (state, action) => {
            state.loading = false;
        },
        [getAllDistrict.fulfilled]: (state, action) => {
            state.loading = false;
            state.districtList = action.payload.data;
        },
        [getAllWards.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllWards.rejected]: (state, action) => {
            state.loading = false;
        },
        [getAllWards.fulfilled]: (state, action) => {
            state.loading = false;
            state.wardsList = action.payload.data;
        },
        [getAllAddress.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllAddress.rejected]: (state, action) => {
            state.loading = false;
        },
        [getAllAddress.fulfilled]: (state, action) => {
            state.loading = false;
            state.addressList = action.payload.data;
        },
    }
})
const { reducer: addressReducer } = addressSlice;
export default addressReducer;