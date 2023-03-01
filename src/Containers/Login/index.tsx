import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter, map, isEmpty } from 'lodash'
import LoginContainer from './Login'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '@/Navigators/RootStackParamList'


type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>


// import auth from '@react-native-firebase/auth'
// import { GoogleSignin } from '@react-native-google-signin/google-signin'
// import SetProfile from '@/Store/User/SetProfile'
// import * as RootNavigation from '@/Navigators/Root.js'

// GoogleSignin.configure({
//   webClientId:
//     '70298129969-pgdf0rbi483nk54t1sl8t4n5pjg2mpnd.apps.googleusercontent.com',
// })


const IndexLogin: React.FC<LoginScreenProps>= ({ navigation, route }) => {
  const dispatch = useDispatch()

  // const [user, setUser] = useState(null)
  // const profile = useSelector(state => state.user.profile)

  // useEffect(() => {
  //   console.log('login is authorized', user)
  //   if (!isEmpty(user)) {
  //     RootNavigation.navigateAndSimpleReset('Tabs')
  //   }

  //   console.log('route params', route.params?.authorized)
  //   if (route.params?.authorized === false) {
  //     setUser(null)
  //   }
  // }, [])

  // const onGoogleButtonPress = async () => {
  //   const { idToken } = await GoogleSignin.signIn()

  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken)

  //   return auth().signInWithCredential(googleCredential)
  // }

  // const onAuthStateChanged = async userAuth => {
  //   if (!userAuth) {
  //     console.log('not authed', '')
  //     return
  //   }
  //   if (userAuth) {
  //     console.log('login userAuth', userAuth)
  //     setUser(userAuth)
  //     console.log('login userAuth store', { authorized: true })
  //     dispatch(SetProfile.action({ authorized: true }))
  //   }

  //   return () => auth.userReference()
  // }

  // useEffect(() => {
  //   console.log('profile chagned', profile.authorized)
  //   if (profile.authorized) {
  //     console.log('go to itin', '')
  //     navigation.navigate('Tabs', { screen: 'Itinerary' })
  //   }
  // }, [profile])

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
  //   return () => {
  //     subscriber
  //   }
  // }, [])

  // const signOut = async () => {
  //   auth().signOut()

  //   setUser(null)

  //   return () => auth.userReference()
  // }

  return (
    <LoginContainer
      // user={user}
      // onGoogleButtonPress={onGoogleButtonPress}
      // signOut={signOut}
    />
  )
}

export default IndexLogin
