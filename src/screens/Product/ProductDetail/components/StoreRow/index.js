import { View, Text } from 'react-native'
import React from 'react'

const StoreRow = ({ item }) => {
    return (
        <View>
            <Text>{item.store.name}</Text>
        </View>
    )
}

export default StoreRow