import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  KeyboardType,
  Keyboard,
  TextInputIOSProps,
  Platform,
  TextInputProps,
} from 'react-native'
import { default as styles } from './styles'
// import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { Textfield } from '@/Components/Textfield'
import ButtonDefault from '@/Components/Buttons/ButtonDefault/ButtonDefault'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Country } from '@/Models/Country'
import { useLazyGetCountryByIdQuery } from '@/Services/modules/Country'
import { useAuthenticateMutation } from '@/Services/modules/Account'
import { useNavigation } from '@react-navigation/native'
import { RootState } from '@/Store'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/Store/Account'
import { MainStackParamsList } from '@/../@types/navigation'

type StackProps = NativeStackScreenProps<MainStackParamsList, 'Login'>

const LoginContainer = (props: StackProps) => {
  // const { Type, Common, Fonts, Gutters, Layout } = useTheme()
  // const { user, onGoogleButtonPress, signOut } = props
  const {} = styles()
  // const { signIn, autoCap = 'none' } = props.route.params
  //
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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

  // useEffect(() => {
  //   console.log('countries login', countries)
  //   getCountryById(19)
  //     .unwrap()
  //     .then((res) => {
  //       console.log('country 19', res)
  //     })
  //     .catch((error) => console.log(error))
  // }, [])

  const signIn = () => {
    console.log('auth', username, password)
    // authenticate({
    //   username: username,
    //   password: password,
    // })
    //   .unwrap()
    //   .then((res) => {
    //     console.log('user res', res)
    //     dispatch(setUser({ user: res }))
    //   })
    //   .catch((error) => console.log(error))
  }

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={{ padding: 20 }}>
            <Textfield
              tPlaceholder="Username"
              testID={'testUserName'}
              onChangeText={(text) => {
                setUsername(text)
              }}
              value={username}
              autoCap={'none'}
            />
            <Textfield
              tPlaceholder="Password"
              tSecureTextEntry
              isPassword
              testID={'testPassword'}
              onChangeText={(text) => {
                setPassword(text)
              }}
              value={password}
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
