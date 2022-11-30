import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../assets/colors/Colors'
import Styles from '../../../base/Styles'
import dataUltils from '../../../data/dataUltils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import HeaderChild from '../../../components/HeaderChild'
import dataLocal from '../../../data/dataLocal'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import ViewUtils from '../../../utils/ViewUtils'
const EventsDetail = ({ item, route }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [check, setCheck] = useState(false)

    useEffect(() => {
        dataLocal.getInfoUser()
        if (dataLocal.userInfo) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    })
    const join = () => {
        if (check) {
            navigation.navigate('RegisterEvent', {
                item: route.params.item
            })
        } else {
            ViewUtils.showAlertDialog('You need login to register', () => {
                navigation.navigate('Login')
            })
        }

    }
    return (
        <View>
            <HeaderChild title={`${route.params.item.name}`}>
                <View
                    // style={[Styles.container, { padding: 20, flex: 1 }]}
                    style={{ padding: 20 }}
                    contentContainerStyle={{ paddingBottom: 10, backgroundColor: ' red' }}
                >
                    <View>
                        <Text
                            style={[
                                Styles.text20,
                                {
                                    color: Colors.titleNewColor,
                                    textAlign: 'center',
                                    marginTop: 20,
                                },
                            ]}>
                            {route.params.item.des}
                        </Text>
                    </View>
                    <Image
                        source={{ uri: dataUltils.getImageUrl(route.params.item.imageUrl) }}
                        style={{
                            width: Styles.constants.widthScreen - 40,
                            height: '100%',
                            marginTop: 40,
                            borderRadius: 15,
                            height: (Styles.constants.widthScreen * 2) / 3,
                        }}
                        resizeMode={'cover'}
                    />
                    <TouchableOpacity
                        onPress={join}
                        style={{
                            width: '100%',
                            paddingVertical: 10,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            height: 50,
                            borderRadius: 14,
                            borderColor: Colors.titleNewColor,
                            marginTop: 36
                        }}>
                        <Ionicons
                            name='clipboard-outline' size={25}
                        />
                        <Text style={[Styles.text18, { color: Colors.tabBlack, marginLeft: 10 }]}>Join</Text>
                    </TouchableOpacity>
                </View>
            </HeaderChild>
        </View>
    )
}

export default EventsDetail