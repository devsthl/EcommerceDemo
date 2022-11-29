import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const HeaderChild = ({
    title, children
}) => {
    const navigation = useNavigation()
    return (
        <View style={[styles.view2]}>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back' size={30} />
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '700'
                    }}>{title}</Text>
            </View>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    view2: {
        flexDirection: 'column'
    },
    view1: {
        flexDirection: 'row',
        height: 90,
        backgroundColor: '#61829e',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 35,
        paddingLeft: 10,
        paddingRight: 10,
    }
})
export default HeaderChild