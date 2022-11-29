import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList
}
    from '@react-navigation/drawer'
import Images from '../../assets/images/Images'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import ViewUtils from '../../utils/ViewUtils'
import { getProfile } from '../../store/User/userSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const CustomDrawer = props => {
    const dispatch = useDispatch()
    const [isLoading, setIsloading] = useState(false)
    const navigation = useNavigation()
    const { userList } = useSelector((state) => state.UserReducer)
    console.log('userList', userList);
    useEffect(() => {
        dispatch(getProfile())
    }, [])
    const Logout = async () => {
        ViewUtils.showAlertDialog('Log out success', () => {
            setIsloading(true)
        })
        await AsyncStorage.clear();
        navigation.reset({
            routes: [{ name: 'Root' }],
        })
    }
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
                        <Text style={{ marginLeft: 5, fontSize: 18 }}>Share your information</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Logout}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 20,
                            marginTop: 5
                        }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text style={{ marginLeft: 5, fontSize: 18 }}>Log out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer