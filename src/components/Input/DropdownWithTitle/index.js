import { View, Text } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import styles from '../TextInputTitle/styles'
const DropdownWithTitle = ({ title, children, notRequire, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text
                style={styles.title}>
                {notRequire ? '' : <Text style={[styles.title, { color: 'red' }]}>*</Text>}{title}
            </Text>
            <View style={{
                paddingHorizontal: 20,
                paddingTop: 10,
                marginVertical: 8,
            }}>{children}</View>
        </View>
    )
}

export default DropdownWithTitle;