import { View, Text } from 'react-native'
import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from '../screens/signin/SignInScreen'
import HomeScreen from '../screens/home'
import RegisterScreen from '../screens/auth/Register'
import OtpScreen from '../screens/auth/Otp'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from '../screens/main/MainScreen'
import Information from '../screens/drawer/Information'
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

const RouterClass = () => {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    function Root() {
        return (
            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props} />}
                initialRouteName='Home'
                conten
                screenOptions={{
                    headerShown: false,
                    drawerLabelStyle: { marginLeft: -20 },
                    drawerActiveBackgroundColor: '#61829e',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333'
                }}>
                <Drawer.Screen
                    name="Trang chủ"
                    component={MainScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name='home-outline' size={22}
                                color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Thông tin người dùng"
                    component={Information}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name='person-outline' size={22}
                                color={color} />
                        )
                    }}
                />
            </Drawer.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen component={Root}
                    options={{}}
                    name="Root" />
                <Stack.Screen
                    name="Login"
                    component={SignInScreen} />
                <Stack.Screen
                    name="Home"
                    component={MainScreen} />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen} />
                <Stack.Screen
                    name="Otp"
                    component={OtpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouterClass