import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductAPI } from "../../api/product/ProductAPI";

export const getAllProduct = createAsyncThunk('getAllProduct', async () => {
    const res = await ProductAPI.getAllProduct();
    // console.log('product: ', res);
    return res;
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productList: [],
        loadingProduct: false,
    },
    reducer: {},
    extraReducers: {
        [getAllProduct.pending]: (state, action) => {
            state.loadingProduct = true;
        },
        [getAllProduct.rejected]: (state, action) => {
            state.loadingProduct = false;
        },
        [getAllProduct.fulfilled]: (state, action) => {
            state.loadingProduct = false;
            state.productList = action.payload;
        },
    }
})
const { reducer: productReducer } = productSlice;
export default productReducer;