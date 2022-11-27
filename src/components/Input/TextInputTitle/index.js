import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../../assets/colors/Colors'
import Styles from '../../../base/Styles'
import styles from './styles'
const TextInputTitle = ({
    value, onChange, placeholder, title, keyboardType, notRequire,
    style, inputStyle, validate
}) => {
    return (
        <View style={[styles.container, style]}>
            <Text
                style={styles.title}>
                {notRequire ? '' : <Text style={[styles.title, { color: 'red' }]}>*</Text>}{title}
            </Text>
            <TextInput
                style={[styles.textInput, inputStyle]}
                placeholder={placeholder}
                value={value}
                // keyboardType={keyboardType === undefined ? 'email-address' : keyboardType}
                placeholderTextColor={Colors.textInput}
                onChangeText={text => {
                    onChange(text)
                }}
                maxLength={20}
            />
            {validate && <Text style={[Styles.text14, { color: 'red', marginLeft: 30 }]}>!invalid</Text>}
        </View>
    )
}

export default TextInputTitle