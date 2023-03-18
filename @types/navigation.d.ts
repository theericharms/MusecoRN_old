import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

type RootStackParamList = {
  Startup: undefined
  Main: undefined
  MainNavigator: undefined
}

export type MainStackParamsList = {
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

export type LoginScreenProps = NativeStackScreenProps<
  MainStackParamsList,
  'Login'
>
