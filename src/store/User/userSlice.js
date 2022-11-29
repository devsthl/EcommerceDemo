import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAPI } from '../../api/user/UserAPI';

export const getProfile = createAsyncThunk('getuser', async () => {
    const res = await UserAPI.getProfile();
    console.log('res', res);
    return res;
})
const userSlice = createSlice({
    name: 'user',
    initialState: {
        userList: [],
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