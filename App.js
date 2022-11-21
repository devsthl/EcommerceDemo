import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RouterClass from './src/routes'
import { Provider } from "react-redux"
import store from './src/store'
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RouterClass />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;