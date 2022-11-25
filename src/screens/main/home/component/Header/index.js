import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const Header = ({ title }) => {
    const insets = useSafeAreaInsets();

    const navigation = useNavigation()
    return (
        <View style={{
            flexDirection: 'row',
            height: 90,
            backgroundColor: '#61829e',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 35,
            paddingLeft: 10,
            paddingRight: 10,
        }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name='menu-outline' size={30} />
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '700'
                }}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Ionicons name='person-outline' size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default Header