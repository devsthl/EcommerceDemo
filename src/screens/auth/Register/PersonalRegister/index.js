import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ListInput from '../components/ListInput'
import { useNavigation } from '@react-navigation/native'
import { UserAPI } from '../../../../api/user/UserAPI'
const PersonalRegister = (
    full_name,
    password,
    date_of_birth,
    gender,
    user_name,
    phone,
    avatar,
    store_id
) => {
    const navigation = useNavigation()
    const [code, steCode] = useState('');
    const [visible, setVisible] = useState(false);
    const register = async (data) => {
        const res = await UserAPI.register({
            user_name: data?.email,
            full_name: data?.full_name,
            password: data?.password,
            phone: data?.phoneNumber
        })
        console.log("check register:", res);
    }

    const getBody = (data) => {
        const body = {
            user_name: data?.email,
            full_name: data?.full_name,
            password: data?.password,
            phone: data?.phoneNumber
        }
        return body
    }
    return (
        <>
            <ListInput
                onCancel={() => {
                    navigation.navigate('Login')
                }}
                onConfirm={register} />
        </>
    )
}

export default PersonalRegister