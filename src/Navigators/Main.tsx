import React, { useEffect, useState } from 'react'
import { store } from '@/Store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { ExampleContainer } from '@/Containers'
// import IndexStore from '@/Containers/Store'
import TabNavigator from './TabNavigator'
// import auth from '@react-native-firebase/auth'
// import { LoginStackNavigator } from './StackNavigators'
import { isEmpty } from 'lodash'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginContainer } from '@/Containers'

type MainStackParamsList = {
  Login: {
    signIn: (args: any) => void
    username: string
    password: string
    setUsername: (args: string) => any
    setPassword: (args: string) => any
    autoCap?: 'none' | 'sentences' | 'words' | 'characters' | undefined
  }
  Tabs: undefined
}

const MainStack = createStackNavigator<MainStackParamsList>()

// @refresh reset
const MainNavigator = () => {
  // return setNav()

  const [isAuthenticated, setIsAuthenticated] = useState(
    store.getState().account.user != null,
  )

  // useEffect(() => {
  //   console.log('auth', auth().currentUser)
  //   // setIsAuthenticated(auth.userAuth.authorized)
  // }, [])

  return (
    <MainStack.Navigator initialRouteName={isAuthenticated ? 'Tabs' : 'Login'}>
      <MainStack.Screen
        name="Login"
        component={LoginContainer}
        options={({ route }) => ({ title: 'Login', headerShown: false })}
      />
      <MainStack.Screen
        name="Tabs"
        component={TabNavigator}
        options={() => ({ title: 'Login', headerShown: false })}
      />
    </MainStack.Navigator>
  )
}

export default MainNavigator
