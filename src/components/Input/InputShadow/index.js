import { View, Text, Image, Pressable, StyleSheet, TextInput, TextStyle, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../assets/colors/Colors';
import Images from '../../../assets/images/Images';
import Ionicon from 'react-native-vector-icons/Ionicons'
import icon from '../../../base/icon';
const InputShadow = ({
    value,
    validate = true,
    onChangeText,
    keyboardType = 'decimal-pad',
    placeholder = '',
    inputStyle,
    containerStyle,
    placeholderTextColor,
    password,
}) => {
    const [isShowpass, setIsShowpass] = useState(false);

    return (
        <View style={[
            { paddingHorizontal: 10, height: 50, width: '100%', },
            containerStyle,
        ]}>
            <View style={{
                position: 'absolute',
                width: '100%',
                height: containerStyle
                    ? containerStyle.height
                        ? containerStyle.height + 2
                        : 50 + 2
                    : 50 + 2,
                top: 0,
                left: containerStyle
                    ? containerStyle.paddingLeft
                        ? containerStyle.paddingLeft
                        : containerStyle.paddingHorizontal
                            ? containerStyle.paddingHorizontal
                            : 10
                    : 10,
                borderRadius: 14,
                borderWidth: !validate ? 2 : 0,
                borderColor: Colors.primary_color,
            }}>
                <Image
                    style={[
                        {
                            width: '100%',
                            height: containerStyle
                                ? containerStyle.height
                                    ? (containerStyle.height) - 2
                                    : 50 - 2
                                : 50 - 2,
                        },
                    ]}
                    resizeMode={'stretch'}
                    source={Images.backgound_input} />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    flex: 1,
                }}>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    style={[
                        {
                            height: '100%',
                            width: '100%',
                            paddingHorizontal: 10,
                            color: Colors.black,
                            flexShrink: 1,


                        },
                        inputStyle,
                    ]}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    placeholderTextColor={placeholderTextColor ?? Colors.black}
                    secureTextEntry={password ? !isShowpass : false}
                />
                {password &&
                    (validate ? (
                        isShowpass ? (
                            <Pressable
                                style={styles.icon}
                                onPress={() => setIsShowpass(false)}>
                                <Ionicon name={icon.eye_outline} size={25} />
                            </Pressable>
                        ) : (
                            <Pressable
                                style={styles.icon}
                                onPress={() => setIsShowpass(true)}>
                                <Ionicon name={icon.eye_off_outline} size={25} />
                            </Pressable>
                        )
                    ) : (
                        <View style={styles.icon}>
                            <Ionicon
                                name={icon.alert_circle}
                                size={25}
                                color={Colors.primary_color}
                            />
                        </View>
                    ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        height: '100%',
        justifyContent: 'center',
        marginRight: 10
    }
})
export default InputShadow