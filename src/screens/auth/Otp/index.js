import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Colors from '../../../assets/colors/Colors'
import OtpInputs from 'react-native-otp-inputs'
import Styles from '../../../base/Styles'
import { UserAPI } from '../../../api/user/UserAPI'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { ActivityIndicator } from 'react-native-paper'
const OtpScreen = ({
    user_name,
    password,
    route,
}) => {
    console.log("route: ", route);
    const [checking, setChecking] = useState(false);
    const handleChangeCode = async (code) => {
        if (code.length === 6) {
            setChecking(true);
            console.log("checking");
            const res = await UserAPI.checkOtp({
                user_name: route.params.user_name.trim().toLowerCase(),
                otp: code
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
        const response = await UserAPI.login({
            user_name: route.params.user_name.trim().toLowerCase(),
            password: route.params.password
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
        <View style={{ flex: 1, marginTop: 100 }}>
            <Text style={styles.text1}>
                {/* {user_name} */}
                Nhập mã OTP
            </Text>
            <Text style={styles.text2}>
                {user_name}1
            </Text>
            <OtpInputs
                autofillFromClipboard
                style={styles.otpinput}
                inputStyles={
                    styles.inputstyle
                }
                numberOfInputs={6}
                handleChange={code => {
                    handleChangeCode(code);
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
                    <TouchableOpacity>
                        <Text
                            style={styles.text3}
                        >Gửi lại mã</Text>
                    </TouchableOpacity>
                </View>
                <ActivityIndicator
                    size='large'
                    animating={checking}
                    style={{
                        marginTop: 40,

                    }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text1: {
        ...Styles.text16,
        fontWeight: '600',
        color: '#4F4F4F',
        width: '100%',
        textAlign: 'center',
        marginTop: Styles.constants.heightScreen / 15,
    },
    text2: {
        ...Styles.text16,
        fontWeight: '600',
        color: Colors.black,
        alignSelf: 'center',
        marginTop: 4,
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
        flex: 1,
        width: Styles.width,
        alignSelf: 'center'
    }
})
export default OtpScreen