import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Images from '../../../assets/images/Images'
import Styles from '../../../base/Styles'
const BaseView = ({ children }) => {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                height: Styles.constants.heightScreen,
                width: Styles.constants.widthScreen,
                marginTop: insets.top,
                marginBottom: insets.bottom,
            }}>
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