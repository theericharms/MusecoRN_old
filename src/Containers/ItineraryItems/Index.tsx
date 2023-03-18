import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { each, filter, groupBy, map, some } from 'lodash'
import Logger from '@/Helpers/Logger'
import { default as styles } from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '../../Hooks'
import { TabStackParamsList } from '@/Navigators/TabNavigator'
import { ItineraryStackParamsList } from '@/Navigators/StackNavigators'
import { Label } from '@/Components/Label'
import { ItineraryItem } from '@/Models/ItineraryItem'
import { addDays, format, isAfter } from 'date-fns'
import { Colors } from '@/Theme/Variables'
import { ItineraryTypesEnum } from '@/Constants'

// the params list is with the stack or tab navigator defintion
type IProps = NativeStackScreenProps<ItineraryStackParamsList, 'ItineraryItems'>

const ItineraryItemsContainer = (props: IProps) => {
  const dispatch = useDispatch()
  const { wrapper } = styles()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const { itineraryItems } = props.route.params
  const { navigation } = props

  const [filteredItineraryItems, setFilteredItineraryItems] =
    useState<ItineraryItem[]>()
  const [isFiltered, setIsFiltered] = useState<boolean>(false)
  const [hasHistory, setHasHistory] = useState<boolean>(false)
  const [allItineraryItems, setAllItineraryItems] = useState<ItineraryItem[]>()
  const [toggleText, setToggleText] = useState('')

  useEffect(() => {
    setAllItineraryItems(itineraryItems)
    doFilteredItineraryItems()
  }, [itineraryItems])

  useEffect(() => {
    console.log('itineraryItems.length', allItineraryItems?.length)
    console.log(
      'filteredItineraryItems?.length',
      filteredItineraryItems?.length,
    )

    console.log(
      'is equal',
      allItineraryItems?.length !== filteredItineraryItems?.length,
    )

    if (
      allItineraryItems?.length !== filteredItineraryItems?.length &&
      filteredItineraryItems !== undefined
    ) {
      console.log('set has history true', '')
      setToggleText('All shows')
      setHasHistory(true)
    } else {
      setToggleText('Upcoming shows')
    }
  }, [filteredItineraryItems])

  useEffect(() => {
    console.log('hashistory', hasHistory)
  }, [hasHistory])

  const getVenueName = (itineraryItem: ItineraryItem) => {
    if (itineraryItem.itinearyItem_Venue != null) {
      return itineraryItem.itinearyItem_Venue.venue_Name
    } else {
      return itineraryItem.itineraryItem_ItineraryType.itineraryType_Name
    }
  }

  const doFilteredItineraryItems = () => {
    if (isFiltered) {
      setFilteredItineraryItems(itineraryItems)
    } else {
      const today = new Date()
      var filteredItineraryItems: ItineraryItem[] = []

      each(itineraryItems, (e) => {
        var filtered = some(e, function (o) {
          return isAfter(
            new Date(parseInt(e.itineraryItem_DateTime) * 1000),
            addDays(today, -1),
          )
        })
        if (filtered) {
          filteredItineraryItems.push(e)
        }
      })

      console.log('filteredItineraryBookings', filteredItineraryItems)
      setFilteredItineraryItems(filteredItineraryItems)
    }

    setIsFiltered(!isFiltered)
  }

  const isDisabled = (item: ItineraryItem) => {
    return (
      item.itineraryItem_TypeId === ItineraryTypesEnum.DAYOFF ||
      item.itineraryItem_TypeId === ItineraryTypesEnum.TRAVELDAY
    )
  }

  const onPress = (item: ItineraryItem) => {
    console.log('item', item)
  }

  return (
    <SafeAreaView>
      <View style={Common.framework.screenWrapper}>
        <ScrollView style={Common.framework.scrollView}>
          <View style={Common.framework.contentWrapper}>
            {hasHistory === true && (
              <TouchableOpacity
                onPress={() => {
                  doFilteredItineraryItems()
                }}
                activeOpacity={1}
                style={{ marginBottom: 10 }}
              >
                <View>
                  <Label>{toggleText}</Label>
                </View>
              </TouchableOpacity>
            )}

            {filteredItineraryItems &&
              map(filteredItineraryItems, (item: ItineraryItem) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ItineraryItemDetail', {
                        ...item,
                        pageTitle: item.itinearyItem_Venue.venue_Name,
                      } as never)
                    }}
                    activeOpacity={1}
                    disabled={isDisabled(item)}
                    key={item.itineraryItem_Id}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: Colors.dark_gray,
                        borderRadius: 5,
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        marginBottom: 10,
                      }}
                      key={item.itineraryItem_Id}
                    >
                      <Label>
                        {format(
                          new Date(
                            parseInt(item.itineraryItem_DateTime) * 1000,
                          ),
                          'iiii, LLLL d, yyyy',
                        )}
                      </Label>
                      <Label>{getVenueName(item)}</Label>
                    </View>
                  </TouchableOpacity>
                )
              })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ItineraryItemsContainer
