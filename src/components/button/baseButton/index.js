import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../assets/colors/Colors'
const IS_IOS = Platform.OS === 'ios';

const BaseButton = ({
    style,
    title,
    onPress,
    textStyle,
    disable = false
}) => {
    return (
        <TouchableOpacity
            disabled={disable}
            style={[styles.container, style]}
            onPress={() => {
                if (onPress) onPress()
            }}
        >
            <View style={[{
                flex: 1,
                justifyContent: 'center',
                // alignItems: 'center'
            }]}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        fontWeight: '300',
        textAlign: 'center'
    },
    container: {
        height: 55,
        width: 450,
        borderRadius: 10,
        shadowColor: 'rgba(255,255,255,0.5)',
        borderColor: 'rgba(255,255,255,0.5)',
        borderWidth: IS_IOS ? 0 : 0,
        backgroundColor: Colors.backgroundScreen,
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 3,
    }
})
export default BaseButton