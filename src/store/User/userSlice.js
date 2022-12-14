import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAPI } from '../../api/user/UserAPI';

export const getProfile = createAsyncThunk('getuser', async (id) => {
    const res = await UserAPI.getProfile(id);
    return res;
})
const userSlice = createSlice({
    name: 'user',
    initialState: {
        userList: [],
        addressList: [],
        loadingUser: false,
    },
    reducers: {},
    extraReducers: {
        [getProfile.pending]: (state, action) => {
            state.loadingUser = true;
        },
        [getProfile.rejected]: (state, action) => {
            state.loadingUser = false;
        },
        [getProfile.fulfilled]: (state, action) => {
            state.loadingUser = false;
            state.userList = action.payload.data;
        },
    }
})
const { reducer: UserReducer } = userSlice;
export default UserReducer;