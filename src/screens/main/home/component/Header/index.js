import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { isUser } from '../../../../../utils/check'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Header = ({ title }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [check, setcheck] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const res = await AsyncStorage.getItem('kToken')
            if (res) {
                setcheck(true)
            } else {
                setcheck(false)
            }
        }
        fetchData()
    }, [check])
    const login = async () => {
        if (check) {
            navigation.navigate('Info')
        } else {
            navigation.navigate('Login')
        }
    }
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
            <TouchableOpacity onPress={login}>
                <Ionicons name='person-outline' size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default Header