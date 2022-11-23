import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
const Information = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text>Information</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Information