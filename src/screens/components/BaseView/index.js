import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Images from '../../../assets/images/Images'
import Styles from '../../../base/Styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const BaseView = ({ children }) => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                height: Styles.constants.heightScreen,
                width: Styles.constants.widthScreen,
                marginTop: insets.top,
                marginBottom: insets.bottom,
            }}>
            <TouchableOpacity
                style={{ margin: 5 }}
                onPress={() => {
                    navigation.goBack()
                }}>
                <Ionicons name="chevron-back" size={30} />
            </TouchableOpacity>
            <Image
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -100,
                }}
                source={Images.banner_1}
            />
            {children}
        </View>
    )
}

export default BaseView