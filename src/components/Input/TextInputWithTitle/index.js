import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../../assets/colors/Colors'
import Ionicon from 'react-native-vector-icons/Ionicons'
import icon from '../../../base/icon'
import AppConstants from '../../../base/AppConstants'

const TextInputWithTitle = ({
    title,
    value,
    validate = true,
    onChangeText,
    keyboardType = 'default',
    placeholder = '',
    require = false,
    inputStyle,
    onFocus,
    lines = 1,
    maxLength,
    password = false
}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {require && <Text style={{ color: Colors.primary_color }}>*</Text>}
                <Text style={styles.title}>{title}</Text>
            </View>
            <TextInput
                style={[
                    styles.codeInput,
                    {
                        backgroundColor: Colors.white,
                        borderColor: Colors.blue,
                        borderRadius: 10
                    },
                    inputStyle,
                ]}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholder={placeholder}
                onFocus={() => {
                    if (onFocus) onFocus();
                }}
                multiline={lines > 1 ? true : false}
                maxLength={maxLength}
                secureTextEntry={password}
            />

            {!validate && (
                <Ionicon
                    name={validate ? icon.checkmark : icon.alert_circle_outline}
                    size={15}
                    color={validate ? Colors.green : Colors.red}
                    style={{ position: 'absolute', right: 20, bottom: 12 }}
                />
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        padding: 10,
        marginTop: 5,
        color: Colors.black,
    },
    codeInput: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        paddingVertical: AppConstants.IS_IOS ? 8 : 5,
        paddingLeft: 10,
        marginHorizontal: 5,
        paddingRight: 30,
    },
    container: {
        // height: 84
    }
});
export default TextInputWithTitle