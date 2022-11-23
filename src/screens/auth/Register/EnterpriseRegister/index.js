import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const EnterpriseRegister = () => {
    const navigation = useNavigation()
    const onback = () => {
        navigation.navigate('Login');
    }
    return (
        <View>
            <TouchableOpacity
                onPress={onback}
            >
                <Text>EnterpriseRegister</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EnterpriseRegister