import { View, Text } from 'react-native'
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './Events/eventSlice'
import UserReducer from './User/userSlice'
import productReducer from './ProductSlice/productSlice'
const store = configureStore({
    reducer: {
        eventReducer: eventReducer,
        UserReducer: UserReducer,
        productReducer: productReducer
    }
})

export default store;