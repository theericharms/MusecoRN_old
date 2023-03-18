// // import React, { useState, useEffect } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { filter, map, isEmpty } from 'lodash'
// // import LoginContainer from './Login'
// // import {
// //   createNativeStackNavigator,
// //   NativeStackScreenProps,
// // } from '@react-navigation/native-stack'
// // import AuthenticateCredentials from '@/Models/AuthenticateCredentials'
// // import { RootState } from '@/Store'
// // import { useLazyGetCountryByIdQuery } from '@/Services/modules/country'
// // import { Country } from '@/Models/Country'
// // import { useAuthenticateMutation } from '@/Services/modules/users'
// // import { setUser } from '@/Store/Account'
// // import { MainStackParamsList } from '@/Navigators/Main'
// // import { useNavigation } from '@react-navigation/native'

// // // type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

// // // import auth from '@react-native-firebase/auth'
// // // import { GoogleSignin } from '@react-native-google-signin/google-signin'
// // // import SetProfile from '@/Store/User/SetProfile'
// // // import * as RootNavigation from '@/Navigators/Root.js'

// // // GoogleSignin.configure({
// // //   webClientId:
// // //     '70298129969-pgdf0rbi483nk54t1sl8t4n5pjg2mpnd.apps.googleusercontent.com',
// // // })

// // // type StackProps = NativeStackScreenProps<MainStackParamsList, 'Login'>

// // const IndexLogin = () => {
// //   const dispatch = useDispatch()
// //   const nav = useNavigation()

// //   const [username, setUsername] = useState('')
// //   const [password, setPassword] = useState('')

// //   const countries = useSelector(
// //     (state: RootState) => state.country.allCountries,
// //   )

// //   const [getCountryById, result, lastPromiseInfo] =
// //     useLazyGetCountryByIdQuery<Country>()

// //   const [authenticate, authResult] = useAuthenticateMutation()

// //   useEffect(() => {
// //     console.log('username: ', username)
// //   }, [username])

// //   useEffect(() => {
// //     console.log('password: ', password)
// //   }, [password])

// //   useEffect(() => {
// //     console.log('countries login', countries)
// //     getCountryById(19)
// //       .unwrap()
// //       .then((res) => {
// //         console.log('country 19', res)
// //       })
// //       .catch((error) => console.log(error))
// //   }, [])

// //   // const [user, setUser] = useState(null)
// //   // const profile = useSelector(state => state.user.profile)

// //   // useEffect(() => {
// //   //   console.log('login is authorized', user)
// //   //   if (!isEmpty(user)) {
// //   //     RootNavigation.navigateAndSimpleReset('Tabs')
// //   //   }

// //   //   console.log('route params', route.params?.authorized)
// //   //   if (route.params?.authorized === false) {
// //   //     setUser(null)
// //   //   }
// //   // }, [])

// //   // const onGoogleButtonPress = async () => {
// //   //   const { idToken } = await GoogleSignin.signIn()

// //   //   const googleCredential = auth.GoogleAuthProvider.credential(idToken)

// //   //   return auth().signInWithCredential(googleCredential)
// //   // }

// //   // const onAuthStateChanged = async userAuth => {
// //   //   if (!userAuth) {
// //   //     console.log('not authed', '')
// //   //     return
// //   //   }
// //   //   if (userAuth) {
// //   //     console.log('login userAuth', userAuth)
// //   //     setUser(userAuth)
// //   //     console.log('login userAuth store', { authorized: true })
// //   //     dispatch(SetProfile.action({ authorized: true }))
// //   //   }

// //   //   return () => auth.userReference()
// //   // }

// //   // useEffect(() => {
// //   //   console.log('profile chagned', profile.authorized)
// //   //   if (profile.authorized) {
// //   //     console.log('go to itin', '')
// //   //     navigation.navigate('Tabs', { screen: 'Itinerary' })
// //   //   }
// //   // }, [profile])

// //   // useEffect(() => {
// //   //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
// //   //   return () => {
// //   //     subscriber
// //   //   }
// //   // }, [])

// //   // const signOut = async () => {
// //   //   auth().signOut()

// //   //   setUser(null)

// //   //   return () => auth.userReference()
// //   // }

// //   // const signIn: (args: any) => void => async {
// //   // console.log(username, password)
// //   // const res = await useLazyAuthenticateQuery()
// //   // if(res != null) {
// //   //   setUser
// //   // }
// //   // }

// //   const signIn = () => {
// //     authenticate({
// //       username: 'eric@museco.io',
// //       password: 'pp00))PP',
// //     })
// //       .unwrap()
// //       .then((res) => {
// //         console.log('user res', res)
// //         dispatch(setUser({ user: res }))
// //       })
// //       .catch((error) => console.log(error))
// //   }

// //   return (
// //     <LoginContainer
// //       signIn={signIn}
// //       username={username}
// //       password={password}
// //       setUsername={setUsername}
// //       setPassword={setPassword}
// //       // signOut={signOut}
// //     />
// //   )
// // }

// export default IndexLogin
