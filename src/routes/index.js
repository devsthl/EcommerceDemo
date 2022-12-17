import { View, Text } from 'react-native'
import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from '../screens/signin/SignInScreen'
import RegisterScreen from '../screens/auth/Register'
import OtpScreen from '../screens/auth/Otp'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from '../screens/main/MainScreen'
import Information from '../screens/Infor'
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EventsDetail from '../screens/Event/Detail'
import RegisterEventScreen from '../screens/Event/Register'
import ListEventScreen from '../screens/Event/List'
import ProductDetail from '../screens/Product/ProductDetail'
import ProductsList from '../screens/Product/ProductsList'
import StoreId from '../screens/StoreId'
import CheckOutScreen from '../screens/Product/ProductDetail/components/CheckOut'
import Address from '../screens/auth/Address'
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
                    name="Home"
                    component={MainScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name='home-outline' size={22}
                                color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Events"
                    component={ListEventScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name='ios-calendar-outline' size={22}
                                color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="News"
                    component={Information}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name='newspaper-outline' size={22}
                                color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Documents"
                    component={Information}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name='newspaper-outline' size={22}
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
                    name="EventsDetail"
                    component={EventsDetail} />
                <Stack.Screen
                    name="RegisterEvent"
                    component={RegisterEventScreen} />
                <Stack.Screen
                    name="ListEvents"
                    component={ListEventScreen} />
                <Stack.Screen
                    name="ProductsList"
                    component={ProductsList} />
                <Stack.Screen
                    name="ProductDetail"
                    component={ProductDetail} />
                <Stack.Screen
                    name='CheckOut'
                    component={CheckOutScreen} />
                <Stack.Screen
                    name='createAddress'
                    component={Address} />
                <Stack.Screen
                    name="StoreId"
                    component={StoreId} />
                <Stack.Screen
                    name="Info"
                    component={Information} />
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