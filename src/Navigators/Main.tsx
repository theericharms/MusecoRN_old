import React, { useEffect, useState } from 'react'
import { store } from '@/Store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { ExampleContainer } from '@/Containers'
// import IndexStore from '@/Containers/Store'
import TabNavigator from './TabNavigator'
// import auth from '@react-native-firebase/auth'
import { LoginStackNavigator } from './StackNavigators'
import { isEmpty } from 'lodash'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginContainer } from '@/Containers'
import RootStackParamList from '@/Navigators/RootStackParamList'


const Stack = createStackNavigator<RootStackParamList>()

// @refresh reset
const MainNavigator = () => {
  // return setNav()

  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   store.getState().user.profile.authorized,
  // )

  // useEffect(() => {
  //   console.log('auth', auth().currentUser)
  //   // setIsAuthenticated(auth.userAuth.authorized)
  // }, [])

  return (
    // <Stack.Navigator initialRouteName={isAuthenticated ? 'Tabs' : 'Login'}>
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name= 'Login'
        component={LoginContainer}
        options={({ route }) => ({ title: 'Login', headerShown: false })}
      />
      {/* <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={({ route }) => ({ title: 'Login', headerShown: false })}
      /> */}
    </Stack.Navigator>
  )
}

export default MainNavigator
