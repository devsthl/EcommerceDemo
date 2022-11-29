import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Colors from '../../../assets/colors/Colors'
import OtpInputs from 'react-native-otp-inputs'
import Styles from '../../../base/Styles'
import { UserAPI } from '../../../api/user/UserAPI'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { ActivityIndicator } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import dataLocal from '../../../data/dataLocal'
import BaseButton from '../../../components/button/baseButton'
const OtpScreen = ({
    user_name,
    password,
    route,
}) => {
    const navigation = useNavigation()
    const [codeOTP, setCodeOTP] = useState();
    const [checking, setChecking] = useState(false);
    const [showbtn, setShowbtn] = useState(true)

    const confirm = async () => {
        if (codeOTP.length === 6) {
            setChecking(true);
            console.log("checking");
            const res = await UserAPI.checkOtp({
                // user_name: route.params.user_name.trim().toLowerCase(),
                otp: codeOTP
            })
            if (res.message === 'error') {
                console.log("check otp k thanh cong");
            } else {
                console.log("success");
                Login();
            }
        }
    }
    const Login = async () => {
        const res = await UserAPI.login({
            user_name: route.params.user_name.trim().toLowerCase(),
            password: route.params.password
        })
        if (res.message === 'error') {
            console.log("dang nhap k thanh cong");
        } else {
            AsyncStorage.setItem('kToken', JSON.stringify(res.data.accessToken))
            console.log("dang nhap thanh cong");
            dataLocal.saveAccount(user_name, password);
            dataLocal.saveInfoUser(res.data).then(() => {
                navigation.replace('Home')
            })
        }
    }
    const resend = async () => {
        const res = await UserAPI.resend({
            user_name: route.params.user_name
        })
    }
    return (
        <View style={{ flex: 1, marginTop: 100 }}>
            <Text style={styles.text1}>
                Nhập mã OTP
            </Text>
            <Text style={styles.text2}>
                OTP đã gửi đến: {route.params.user_name}
            </Text>
            <OtpInputs
                autofillFromClipboard
                style={styles.otpinput}
                inputStyles={
                    styles.inputstyle
                }
                numberOfInputs={6}
                handleChange={code => {
                    setCodeOTP(code);
                    setShowbtn(false)
                }}
            />
            <View
                style={styles.view}
            >
                <View
                    style={
                        styles.view1
                    }>
                    <Text style={{
                        marginHorizontal: 5,
                    }}>
                        Không nhận được mã?
                    </Text>
                    <TouchableOpacity onPress={resend}>
                        <Text
                            style={styles.text3}
                        >Gửi lại mã</Text>
                    </TouchableOpacity>
                </View>
                <ActivityIndicator
                    size='small'
                    animating={checking}
                    style={{
                        marginTop: 10,
                    }} />
            </View>
            <View style={{
                marginVertical: 10,
                alignItems: 'center'
            }}>
                <BaseButton
                    title={'Xác nhận'}
                    style={styles.btn}
                    textStyle={styles.btntext}
                    disable={showbtn}
                    onPress={confirm}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text1: {
        ...Styles.text28,
        fontWeight: '700',
        color: '#4F4F4F',
        width: '100%',
        textAlign: 'center',
        marginTop: Styles.constants.heightScreen / 15,
    },
    text2: {
        ...Styles.text14,
        fontWeight: '600',
        color: Colors.black,
        alignSelf: 'center',
        marginTop: 10,
    },
    otpinput: {
        height: 'auto',
        width: 'auto',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
    },
    inputstyle: {
        ...Styles.text45,
        color: Colors.primary_color,
        fontWeight: '400',
        borderColor: Colors.primary_color,
        borderBottomWidth: 1.5,
        marginRight: 5.15,
        height: 'auto',
        width: Styles.width / 6 - 3.5,
        textAlign: 'center',
    },
    text3: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.textLinkColor,
    },
    view1: {
        flexDirection: 'row',
        marginTop: 23,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        flex: 0.15,
        width: Styles.width,
        alignSelf: 'center'
    },
    btn: {
        width: '70%',
        alignItems: 'center',
        backgroundColor: '#bc8d3b'
    },
    btntext: {
        fontWeight: '700'
    }
})
export default OtpScreen