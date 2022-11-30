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
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import dataLocal from '../../data/dataLocal'
import BaseButton from '../button/baseButton'
const CustomDrawer = props => {
    const dispatch = useDispatch()
    const [isLoading, setIsloading] = useState(false)
    const navigation = useNavigation()
    const { userList } = useSelector((state) => state.UserReducer)
    useEffect(() => {
        dataLocal.getInfoUser()
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
                {dataLocal.userInfo ? (
                    <ImageBackground
                        source={Images.image_background}
                        style={{ padding: 20 }}>
                        <Image source={Images.image_user}
                            style={{ width: 80, height: 80, borderRadius: 40 }} />
                        <Text style={{ color: '#fff', fontSize: 18, }}>@{dataLocal.userInfo?.email}</Text>
                    </ImageBackground>
                )
                    :
                    <ImageBackground
                        source={Images.image_background}
                        style={{ padding: 20 }}>
                        {/* <Image source={Images.image_user}
                            style={{ width: 80, height: 80, borderRadius: 40 }} /> */}
                        <Ionicons name="ios-person-outline" size={70} color={'#fff'} />

                        <Text style={{ color: '#fff', fontSize: 18, }}>@empty</Text>
                    </ImageBackground>
                }

                <View
                    style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}><DrawerItemList {...props} /></View>
            </DrawerContentScrollView>
            {
                dataLocal.userInfo ? (
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
                )
                    :
                    (
                        <View style={{
                            padding: 20,
                            borderTopWidth: 1,
                            borderTopColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <BaseButton
                                title={'LOGIN'}
                                style={{
                                    backgroundColor: '#61829e',
                                    width: '90%',
                                    height: 42,
                                    borderRadius: 5,
                                    marginBottom: 20
                                }}
                                textStyle={{
                                    fontSize: 22,
                                    fontWeight: '400'
                                }}
                                onPress={() => {
                                    navigation.navigate('Login')
                                }}
                            />
                            <BaseButton
                                title={'REGISTER'}
                                style={{
                                    backgroundColor: '#fff',
                                    borderColor: 'red',
                                    width: '90%',
                                    height: 42,
                                    borderRadius: 5,
                                    marginBottom: 20,
                                    borderColor: '#61829e',
                                    borderWidth: 1
                                }}
                                textStyle={{
                                    fontSize: 22,
                                    fontWeight: '400'
                                }}
                                onPress={() => {
                                    navigation.navigate('Register')
                                }}
                            />
                        </View>
                    )
            }
        </View>
    )
}

export default CustomDrawer