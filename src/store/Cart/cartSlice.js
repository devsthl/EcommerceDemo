import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartAPI } from "../../api/cart/CartAPI";

export const getAllCart = createAsyncThunk('getAllCart', async () => {
    const res = await CartAPI.getAllCart();
    console.log("cart:", res.data);
    return res;
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        loadingCart: false,
    },
    reducers: {},
    extraReducers: {
        [getAllCart.pending]: (state, action) => {
            state.loadingCart = true;
        },
        [getAllCart.rejected]: (state, action) => {
            state.loadingCart = false;
        },
        [getAllCart.fulfilled]: (state, action) => {
            state.loadingCart = false;
            state.cartList = action.payload.data.store;
        },
    }
})
const { reducer: cartReducer } = cartSlice;
export default cartReducer;
