import { View, Text } from 'react-native'
import React from 'react'
const StoreId = ({ item, route }) => {
    console.log("item:", route.params.item.id);
    return (
        <View>
            <Text>{route.params.item.id}</Text>
            <Text>{route.params.item.id}</Text>
            <Text>{route.params.item.id}</Text>
            <Text>{route.params.item.id}</Text>
        </View>
    )
}

export default StoreId