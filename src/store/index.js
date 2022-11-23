import { View, Text } from 'react-native'
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './Events/eventSlice'
const store = configureStore({
    reducer: {
        eventReducer: eventReducer
    }
})


export default store;