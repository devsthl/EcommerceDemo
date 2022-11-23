import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Colors from '../../assets/colors/Colors'
import BaseView from '../components/BaseView'
import { UserAPI } from '../../api/user/UserAPI'
import InputShadow from '../../components/Input/InputShadow'
import BaseButton from '../../components/button/baseButton'
import AppCheckBox from '../../components/AppCheckBox'
import AsyncStorage from '@react-native-async-storage/async-storage'
import camelize from 'camelize'
import dataLocal from '../../data/dataLocal'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { getAllEvents } from '../../store/Events/eventSlice'
import { useDispatch } from 'react-redux'
const SignInScreen = () => {
    const [isLoading, setLoading] = useState(false)
    const [isRememberPass, setIsRememberPass] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    //alert
    const [alertInfo, setAlertInfo] = useState(null);
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const onRegister = () => {
        navigation.navigate('Register')
    }
    useEffect(() => {
        dispatch(getAllEvents())
    }, [2000])
    const Login = async () => {
        // const res = await UserAPI.getAll()
        // console.log("res", res);

        //API1
        const response = await UserAPI.login({
            user_name: username.trim().toLowerCase(),
            password: password
        })
        if (response.message === 'error') {
            console.log("dang nhap k thanh cong");
        } else {
            AsyncStorage.setItem('kToken', JSON.stringify(response.data.accessToken))
            // AsyncStorage.setItem('info', JSON.stringify(response.data))
            console.log("dang nhap thanh cong");
            if (isRememberPass) dataLocal.saveAccount(username, password);
            dataLocal.saveInfoUser(response.data).then(() => {
                navigation.navigate('Home')
            })
        }


    }
    return (
        <BaseView>
            <View style={{ flex: 1 }}>
                <View
                    style={[{ paddingHorizontal: 20, paddingTop: 120 }]}
                >
                    <Text style={styles.loginTitle}>Login</Text>
                    <InputShadow
                        value={username}
                        onChangeText={setUsername}
                        placeholder='User name'
                        containerStyle={{ marginVertical: 10, marginTop: 30 }}
                    />
                    <InputShadow
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Pass Word'
                        containerStyle={{ marginVertical: 10, }}
                        password
                    />
                    <View style={[styles.row,
                    {
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }]}>
                        <AppCheckBox
                            checked={isRememberPass}
                            isSquareType
                            onChange={setIsRememberPass}
                            text='Remember Pass'
                        />
                        <TouchableOpacity style={{ marginRight: 40 }}
                            onPress={onRegister}
                        >
                            <Text>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <BaseButton
                        title='Login'
                        style={[styles.button]}
                        textStyle={[styles.textButton]}
                        onPress={Login}
                    />
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
        flexGrow: 0,
        flexShrink: 1,
    },
    text16: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: '500',
    },
    loginTitle: {
        color: Colors.black,
        fontWeight: '600',
        fontSize: 30,
        width: '100%',
        textAlign: 'center'
    },
    button: {
        backgroundColor: Colors.blue,
        borderColor: Colors.white,
        borderWidth: 1,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    textButton: {
        color: Colors.white,
        // fontSize: 20,
        fontWeight: '500'
    }
})
export default SignInScreen