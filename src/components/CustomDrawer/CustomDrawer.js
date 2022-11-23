import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList
}
    from '@react-navigation/drawer'
import Images from '../../assets/images/Images'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{
                backgroundColor: '#61829e'
            }}>
                <ImageBackground
                    source={Images.image_background}
                    style={{ padding: 20 }}>
                    <Image source={Images.image_user}
                        style={{ width: 80, height: 80, borderRadius: 40 }} />
                    <Text style={{ color: '#fff', fontSize: 18, }}>@user_name</Text>
                </ImageBackground>
                <View
                    style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}><DrawerItemList {...props} /></View>
            </DrawerContentScrollView>
            <View style={{
                padding: 20,
                borderTopWidth: 1,
                borderTopColor: '#ccc'
            }}>
                <TouchableOpacity onPress={() => { }}
                    style={{ paddingVertical: 15, }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text style={{ marginLeft: 5, fontSize: 18 }}>Chia sẻ thông tin của bạn</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 20,
                            marginTop: 5
                        }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text style={{ marginLeft: 5, fontSize: 18 }}>Đăng xuất</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer