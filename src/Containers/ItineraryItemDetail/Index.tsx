import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { filter, groupBy, map } from 'lodash'
import Logger from '@/Helpers/Logger'
import { default as styles } from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '../../Hooks'
import { ItineraryStackParamsList } from '@/Navigators/StackNavigators'
import { Label } from '@/Components/Label'
import Utilities from '@/Helpers/Utilities'
import { FontSize } from '@/Theme/Variables'
import { Address } from '@/Models/Address'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

// the params list is with the stack or tab navigator defintion
type IProps = NativeStackScreenProps<
  ItineraryStackParamsList,
  'ItineraryItemDetail'
>

const ItineraryItemDetailContainer = (props: IProps) => {
  const dispatch = useDispatch()
  const { wrapper } = styles()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const { itineraryItem: item, pageTitle } = props?.route?.params
  const [computedAddress, setComputedAddress] = useState<string>()

  useEffect(() => {
    // if (itineraryItem != undefined) {
    console.log('detail', props?.route)
    console.log('pageTitle', pageTitle)
    // }
  }, [])

  const buildAddress = () => {
    const address = item.itinearyItem_Venue.venue_AddressVM
    let addressStr = []
    addressStr.push(<Label key={'A'}>{address.address_Road1}</Label>)

    if (address.address_Road2) {
      addressStr.push(<Label key={'B'}>{address.address_Road2}</Label>)
    }

    if (address.address_Road3) {
      addressStr.push(<Label key={'C'}>address.address_Road3</Label>)
    }

    if (address.address_StateId) {
      addressStr.push(
        <Label
          key={'D'}
        >{`${address.address_City}, ${address.stateString}, ${address.address_PostCode}`}</Label>,
      )
    } else {
      addressStr.push(
        <Label
          key={'E'}
        >{`${address.address_City}, ${address.address_PostCode}`}</Label>,
      )
    }

    addressStr.push(<Label key={'F'}>{address.countryString}</Label>)

    return (
      <View
        style={{ alignContent: 'flex-start', justifyContent: 'flex-start' }}
      >
        {addressStr}
      </View>
    )
  }

  return (
    <SafeAreaView>
      <View style={Common.framework.screenWrapper}>
        <ScrollView style={Common.framework.scrollView}>
          <View style={Common.framework.contentWrapper}>
            <Label
              style={{
                fontSize: FontSize.regular,
                fontWeight: 'bold',
                marginBottom: 10,
              }}
            >
              {Utilities.formatTimeStamp(
                item.itineraryItem_DateTime,
                'iiii, LLLL d, yyyy',
              )}
            </Label>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  `${item.itinearyItem_Venue.venue_AddressVM.address_ComputedAddress}`,
                )
              }}
              activeOpacity={1}
              style={{ marginBottom: 20 }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'flex-start', flex: 1 }}>
                  <Label style={{ marginBottom: 5 }}>
                    {item.itinearyItem_Venue.venue_Name}
                  </Label>
                  <Label>{buildAddress()}</Label>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{ alignSelf: 'flex-end' }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ marginBottom: 20 }}>
              <Label style={{ fontWeight: 'bold', marginBottom: 10 }}>
                Contact Info
              </Label>
              <Label>{item.itinearyItem_Venue.venue_ContactName}</Label>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    `mailto:${item.itinearyItem_Venue.venue_ContactEmail}`,
                  )
                }}
                activeOpacity={1}
              >
                <Label>{item.itinearyItem_Venue.venue_ContactEmail}</Label>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    `tel:${item.itinearyItem_Venue.venue_ContactPhone}`,
                  )
                }}
                activeOpacity={1}
              >
                <Label>{item.itinearyItem_Venue.venue_ContactPhone}</Label>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Label style={{ fontWeight: 'bold' }}>Schedule</Label>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ItineraryItemDetailContainer
