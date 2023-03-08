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

interface ILogin {
  signIn: (args: any) => void
  username: string
  password: string
  setUsername: (args: string) => any
  setPassword: (args: string) => any
  autoCap?: 'none' | 'sentences' | 'words' | 'characters' | undefined
}

const LoginContainer: React.FC<ILogin> = (props) => {
  // const { Type, Common, Fonts, Gutters, Layout } = useTheme()
  // const { user, onGoogleButtonPress, signOut } = props
  const {} = styles()

  const {
    signIn,
    username,
    password,
    setUsername,
    setPassword,
    autoCap = 'none',
  } = props

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
              autoCap={autoCap}
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
