import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RouterClass from './src/routes'
const App = () => {
  return (
    <SafeAreaProvider>
      <RouterClass />
    </SafeAreaProvider>
  )
}

export default App;