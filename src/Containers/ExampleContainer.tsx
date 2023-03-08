import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { useLazyGetCountriesQuery } from '@/Services/modules/country'
import { changeTheme, ThemeState } from '@/Store/Theme'
import { Country } from '@/Models/Country'

const ExampleContainer = () => {
  // const { t } = useTranslation()
  // const { Common, Fonts, Gutters, Layout } = useTheme()
  // const dispatch = useDispatch()

  // const [userId, setUserId] = useState('9')
  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyFetchOneQuery()
  useEffect(() => {
    // const getAllCountries = async () => {
    //   await getCountries()
    //     .unwrap()
    //     .then((countryData: Country[]) => {
    //       setCountries(countryData)
    //       console.log('countryData', countryData)
    //     })
    // }
    // getAllCountries()
    // getCountryById(19)
    // .unwrap()
    // .then((countryData: Country) => setCountry(countryData))
  }, [])

  // useEffect(() => {
  //   if (countries) {
  //     console.log(countries)
  //   }
  // }, [countriesData])

  // useEffect(() => {
  //   fetchOne(userId)
  // }, [fetchOne, userId])

  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
  //   dispatch(changeTheme({ theme, darkMode }))
  // }

  return (
    <ScrollView
    // style={Layout.fill}
    // contentContainerStyle={[
    //   Layout.fill,
    //   Layout.colCenter,
    //   Gutters.smallHPadding,
    // ]}
    >
      {/* <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
        {(isLoading || isFetching) && <ActivityIndicator />}
        {!isSuccess ? (
          <Text style={Fonts.textRegular}>{error}</Text>
        ) : (
          <Text style={Fonts.textRegular}>
            {t('example.helloUser', { name: data?.name })}
          </Text>
        )}
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>
          {t('example.labels.userId')}
        </Text>
        <TextInput
          onChangeText={setUserId}
          editable={!isLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput]}
        />
      </View>
      <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>DarkMode :</Text>

      <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: null })}
      >
        <Text style={Fonts.textRegular}>Auto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Common.button.outlineRounded, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: true })}
      >
        <Text style={Fonts.textRegular}>Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Common.button.outline, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: false })}
      >
        <Text style={Fonts.textRegular}>Light</Text>
      </TouchableOpacity> */}
    </ScrollView>
  )
}

export default ExampleContainer
