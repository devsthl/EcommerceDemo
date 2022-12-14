import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BaseView from '../components/BaseView'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RegisterScreen from '../auth/Register'
import Information from '../Infor'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import HomePresentation from './home/HomePresentation'
const MainScreen = () => {
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#61829e' },
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: 'yellow',
            }}
        >
            <Tab.Screen
                name="Home5"
                component={HomePresentation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline"
                            color={color}
                            size={size} />
                    )
                }}
            />
            <Tab.Screen name="Home2" component={Information}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications-outline"
                            color={color}
                            size={size} />
                    )
                }} />
            <Tab.Screen name="Home3" component={Information}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="grid-outline"
                            color={color}
                            size={size} />
                    )
                }} />
            <Tab.Screen name="Home4" component={Information}
                options={{
                    tabBarBadge: 3,
                    tabBarBadgeStyle: { backgroundColor: 'black' },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-chatbox-ellipses-outline"
                            color={color}
                            size={size} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default MainScreen