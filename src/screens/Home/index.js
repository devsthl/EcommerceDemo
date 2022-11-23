import { View, Text } from 'react-native'
import React from 'react'
import BaseView from '../components/BaseView'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <BaseView>
            <View>
                <Text>HomeScreen</Text>
            </View>
        </BaseView>
    )
}

export default HomeScreen