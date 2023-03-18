import React from 'react'
import { View, Text, TouchableOpacity, TextStyle } from 'react-native'
import { default as styles } from './styles'
// import { useTheme } from '@/Theme'
import { FontSize } from '@/Theme/Variables'

interface Props {
  children: React.ReactNode
  style?: TextStyle
}

const Label = (props: Props) => {
  // const { Type, Common, Fonts, Gutters, Layout } = useTheme()

  const { wrapper } = styles()

  return (
    <Text
      style={{
        fontSize: FontSize.small,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  )
}

export default Label
