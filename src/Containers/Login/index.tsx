import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter, map, isEmpty } from 'lodash'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import AuthenticateCredentials from '@/Models/AuthenticateCredentials'
import { RootState } from '@/Store'
import { useLazyGetCountryByIdQuery } from '@/Services/modules/Country'
import { Country } from '@/Models/Country'
import { useAuthenticateMutation } from '@/Services/modules/Account'
import { setUser } from '@/Store/Account'
// import { MainStackParamsList } from '@/Navigators/Main'
import { useNavigation } from '@react-navigation/native'
import { ButtonDefault } from '@/Components/Buttons/ButtonDefault'
import { Textfield } from '@/Components/Textfield'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { MainStackParamsList } from '@/../@types/navigation'
import { navigateAndSimpleReset } from '@/Navigators/utils'
// import { Cart } from '@/Models/CartItem'
import { addToCart, clearCart, removeFromCart } from '@/Store/Cart'

// import LoginContainer from './Login/Login'

// type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

// import auth from '@react-native-firebase/auth'
// import { GoogleSignin } from '@react-native-google-signin/google-signin'
// import SetProfile from '@/Store/User/SetProfile'
// import * as RootNavigation from '@/Navigators/Root.js'

// GoogleSignin.configure({
//   webClientId:
//     '70298129969-pgdf0rbi483nk54t1sl8t4n5pjg2mpnd.apps.googleusercontent.com',
// })

type IProps = NativeStackScreenProps<MainStackParamsList, 'Login'>

const LoginContainer = (props: IProps) => {
  const dispatch = useDispatch()
  const nav = useNavigation()

  const { navigation } = props

  const [username, setUsername] = useState('btm.second.bandup@gmail.com')
  const [password, setPassword] = useState('pp00))pp')

  const countries = useSelector(
    (state: RootState) => state.country.allCountries,
  )

  const [getCountryById, result, lastPromiseInfo] =
    useLazyGetCountryByIdQuery<Country>()

  const [authenticate, authResult] = useAuthenticateMutation()

  useEffect(() => {
    console.log('username: ', username)
  }, [username])

  useEffect(() => {
    console.log('password: ', password)
  }, [password])

  // const test = async () => {
  //   const cartItem: Cart = {
  //     Cart_Id: 1,
  //     Cart_ProductId: 2,
  //     Cart_VariantId: 4,
  //     Cart_Quantity: 1,
  //   }
  //   const cartItem2: Cart = {
  //     Cart_Id: 2,
  //     Cart_ProductId: 2,
  //     Cart_VariantId: 4,
  //     Cart_Quantity: 1,
  //   }
  //   const cartItem3: Cart = {
  //     Cart_Id: 3,
  //     Cart_ProductId: 2,
  //     Cart_VariantId: 4,
  //     Cart_Quantity: 1,
  //   }

  //   dispatch(addToCart(cartItem))
  //   dispatch(addToCart(cartItem2))
  //   dispatch(addToCart(cartItem3))

  //   dispatch(removeFromCart(0))

  //   dispatch(clearCart())
  // }

  useEffect(() => {
    console.log('countries login', countries)
    getCountryById(19)
      .unwrap()
      .then((res) => {
        console.log('country 19', res)
      })
      .catch((error) => console.log(error))

    // test()
  }, [])

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

  // const signIn: (args: any) => void => async {
  // console.log(username, password)
  // const res = await useLazyAuthenticateQuery()
  // if(res != null) {
  //   setUser
  // }
  // }

  const signIn = () => {
    authenticate({
      username: username,
      password: password,
    })
      .unwrap()
      .then((res) => {
        //console.log('user res', res)
        dispatch(setUser({ user: res }))
        navigateAndSimpleReset('Tabs', 0)
      })
      .catch((error) => console.log(error))
  }

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={{ padding: 20 }}>
            <Textfield
              tPlaceholder={'Username'}
              testID={'tfLoginUsername'}
              onChangeText={(text) => {
                setUsername(text)
              }}
              // value={username}
              autoCap={'none'}
            />
            <Textfield
              tPlaceholder="Password"
              tSecureTextEntry
              isPassword
              testID={'tfLoginPassword'}
              onChangeText={(text) => {
                setPassword(text)
              }}
              // value={password}
            />
            <ButtonDefault onPress={signIn} label={''}>
              Sign In
            </ButtonDefault>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default LoginContainer
