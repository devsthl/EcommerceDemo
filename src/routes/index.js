import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from '../screens/signin/SignInScreen'
import HomeScreen from '../screens/Home'
const RouterClass = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Login"
                    component={SignInScreen} />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouterClass