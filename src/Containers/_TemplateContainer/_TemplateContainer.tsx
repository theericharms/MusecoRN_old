import React, { useState } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  Button,
  ScrollView,
} from 'react-native'
import { default as styles } from './styles'
import { useTheme } from '@/Theme'
import Icon from '@/Components/Fonts/Icon'
import { IconFonts, Colors, UIColors } from '@/Theme/Variables'

import { Label } from '../../Components/Typography/Label'
import PropTypes from 'prop-types'

export type props = {

}

const _TemplateContainerContainer = (props) => {
  const { Type, Common, Fonts, Gutters, Layout } = useTheme()
  const {} = props

  const { wrapper } = styles()

  return (
    <ScrollView
      style={Layout.formWrapper}
      contentContainerStyle={Layout.pageScrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={Layout.contentWrapper}>
        <Text>Hi</Text>
      </View>
    </ScrollView>
  )
}

_TemplateContainerContainer.Proptypes = {}

_TemplateContainerContainer.defaultProps = {}

export default _TemplateContainerContainer
