import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { default as styles } from './styles'
// import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { navigationRef } from '@/Navigators/utils'


const LoginContainer = (props: any) => {
  // const { Type, Common, Fonts, Gutters, Layout } = useTheme()
  // const { user, onGoogleButtonPress, signOut } = props
  const {} = styles()

  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1, marginTop: 100 }}>
      <View style={{ margin: 10 }}>
        {/* <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={onGoogleButtonPress}
        /> */}
        <Text>Hi!</Text>
      </View>
    </SafeAreaView>
  )
}

LoginContainer.Proptypes = {}

LoginContainer.defaultProps = {}

export default LoginContainer
