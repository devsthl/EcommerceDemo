import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../assets/colors/Colors'
import BaseView from '../components/BaseView'
import LoginInput from '../auth/Login/conponents/Input'
import { UserAPI } from '../../api/user/UserAPI'
const SignInScreen = () => {

    const Login = async () => {
        const res = await UserAPI.getProfile();
        console.log("user", res);
        // fetch('https://fakestoreapi.com/products/1')
        //     .then(res => res.json())
        //     .then(json => console.log(json))
        // fetch('https://fakestoreapi.com/auth/login', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         username: "mor_2314",
        //         password: "83r5^_"
        //     })
        // })
        //     .then(res => res.json())
        //     .then(json => console.log(json))
        // // .then(res =>)
    }
    return (
        <BaseView>
            <View style={{ flex: 1 }}>
                <View>
                    <LoginInput onPressLoginBtn={Login} />
                </View>
            </View>
        </BaseView>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    box: {
        height: 30,
        backgroundColor: Colors.white,
        borderRadius: 5,
        padding: 5,
        flexGrow: 0,
        flexShrink: 1,
    },
    text16: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: '500',
    }
})
export default SignInScreen