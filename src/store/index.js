import { View, Text } from 'react-native'
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './Events/eventSlice'
import UserReducer from './User/userSlice'
import productReducer from './ProductSlice/productSlice'
import addressReducer from './Address/AddressSlice'
import storeReducer from './Store/storeSlice'
import cartReducer from './Cart/cartSlice'
const store = configureStore({
    reducer: {
        eventReducer: eventReducer,
        UserReducer: UserReducer,
        productReducer: productReducer,
        addressReducer: addressReducer,
        storeReducer: storeReducer,
        cartReducer: cartReducer
    }
})

export default store;