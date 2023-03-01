import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { default as styles } from './styles'
import { useTheme } from '@/Theme'

const _TemplateComponent = (props) => {
  const { Type, Common, Fonts, Gutters, Layout } = useTheme()

  const { wrapper } = styles()

  return <View style={wrapper} />
}

export default _TemplateComponent
