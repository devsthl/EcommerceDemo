import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import InputShadow from '../../../../../components/Input/InputShadow'
import { useState } from 'react'
import AppCheckBox from '../../../../../components/AppCheckBox'
import Colors from '../../../../../assets/colors/Colors'
import BaseButton from '../../../../../components/button/baseButton'
const LoginInput = ({ style, onPressLoginBtn }) => {
    const [isRememberPass, setIsRememberPass] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View
            style={[{ paddingHorizontal: 20, paddingTop: 120 }, style]}
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
                <TouchableOpacity style={{ marginRight: 40 }}>
                    <Text>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <BaseButton
                title='Login'
                style={[styles.button]}
                textStyle={[styles.textButton]}
                onPress={() => {
                    if (onPressLoginBtn)
                        onPressLoginBtn(
                            username.trim().toLowerCase(),
                            password.trim().toLowerCase(),
                            isRememberPass
                        )
                }}
            />
        </View>
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
export default LoginInput