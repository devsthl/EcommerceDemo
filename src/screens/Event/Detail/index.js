import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../assets/colors/Colors'
import Styles from '../../../base/Styles'
import dataUltils from '../../../data/dataUltils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import HeaderChild from '../../../components/HeaderChild'
const EventsDetail = ({ item, route }) => {
    const navigation = useNavigation()
    return (
        <HeaderChild title={route.params.item.name}>
            <ScrollView
                style={[Styles.container, { padding: 20 }]}
                contentContainerStyle={{ paddingBottom: 40 }}>
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
                {/* <Introduce data={data.des ?? 'Khoá học đào tạo về vũ khi hạt nhân'} style={{ marginTop: 30 }} /> */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('RegisterEvent', {
                            item: route.params.item
                        })
                    }}
                    style={{
                        width: '100%',
                        paddingVertical: 10,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 14,
                        borderColor: Colors.titleNewColor,
                        marginTop: 36
                    }}>
                    <Ionicons
                        name='clipboard-outline' size={25}
                    />
                    <Text style={[Styles.text18, { color: Colors.tabBlack, marginLeft: 10 }]}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        </HeaderChild>
    )
}

export default EventsDetail