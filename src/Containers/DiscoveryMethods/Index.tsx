import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { filter, groupBy, map } from 'lodash'
import Logger from '@/Helpers/Logger'
import { default as styles } from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '../../Hooks'
import { StoreStackParamsList } from '@/Navigators/StackNavigators'

// the params list is with the stack or tab navigator defintion
type IProps = NativeStackScreenProps<StoreStackParamsList, 'DiscoveryMethods'>

const DiscoveryMethodsContainer = (props: IProps) => {
  const dispatch = useDispatch()
  const { wrapper } = styles()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <SafeAreaView>
      <View style={Common.framework.screenWrapper}>
        <ScrollView style={Common.framework.scrollView}>
          <View style={Common.framework.contentWrapper}>
            {/* content here */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default DiscoveryMethodsContainer
