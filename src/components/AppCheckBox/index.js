import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { CheckBox } from 'react-native-elements'
import Colors from '../../assets/colors/Colors'
const AppCheckBox = ({
    checked,
    containerStyle,
    onChange,
    isSquareType,
    text,
    checkedColor,
    boxColor
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={() => {
                if (onChange) onChange(!checked)
            }}>
            <CheckBox
                checked={checked}
                containerStyle={{
                    borderColor: boxColor ? boxColor : Colors.transparent,
                    padding: 0
                }}
                iconType='ionicon'
                onPress={() => {
                    if (onChange) onChange(!checked)
                }}
                uncheckedIcon={
                    isSquareType ? 'md-square-outline' : 'ios-radio-button-off'
                }
                uncheckedColor={checked ? Colors.primary_color : Colors.inActiveText}
                checkedIcon={
                    isSquareType ? 'md-checkbox-outline' : 'ios-radio-button-on'
                }
                checkedColor={checkedColor ? checkedColor : Colors.blue}
                textStyle={{ fontWeight: 'normal' }}
            />

            <Text
                style={{
                    color: checked ? Colors.primary_color : Colors.black, flexGrow: 1
                }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 1,
    }
})
export default AppCheckBox