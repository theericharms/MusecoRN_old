import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

import { useLazyGetCountriesQuery } from '@/Services/modules/Country'
import { Country } from '@/Models/Country'
import { setAllCountries } from '@/Store/Country'

const StartupContainer = () => {
  const dispatch = useDispatch()
  const { Layout, Gutters, Fonts } = useTheme()
  const [getCountries, { data: countryData }] = useLazyGetCountriesQuery()
  const { t } = useTranslation()

  // const [allCountries, setAllCountries] = useState<Country[]>()

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: null })
  }

  useEffect(() => {
    getCountries()

    init()
  })

  useEffect(() => {
    if (countryData != null) {
      dispatch(setAllCountries({ allCountries: countryData }))
      navigateAndSimpleReset('Main')
    }
  }, [countryData])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  )
}

export default StartupContainer
