import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { filter, groupBy, map, each, some } from 'lodash'
import Logger from '@/Helpers/Logger'
import { default as styles } from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '../../Hooks'
import { TabStackParamsList } from '@/Navigators/TabNavigator'
import { ButtonDefault } from '@/Components/Buttons/ButtonDefault'
import { ItineraryStackParamsList } from '@/Navigators/StackNavigators'
import GetItineraries from '@/Services/modules/Itinerary/GetItineraryList'
import { useLazyGetItineraryListQuery } from '@/Services/modules/Itinerary'
import { setItineraryBookings } from '@/Store/Itinerary'
import { RootState } from '@/Store'
import { ItineraryTypesEnum } from '@/Constants'
import { format, isAfter, addDays } from 'date-fns'
import { FontSize } from '@/Theme/Variables'
import { Label } from '@/Components/Label'
import { ItineraryItem } from '@/Models/ItineraryItem'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useLazyGetArtistByKeyQuery } from '@/Services/modules/Artist'
import { setArtist } from '@/Store/Artist'
import { Artist } from '@/Models/Artist'
import { Itinerary } from '@/Models/Itinerary'
import { ItineraryBookings } from '@/Models/ItineraryBookings'

type IProps = NativeStackScreenProps<ItineraryStackParamsList, 'ItineraryHome'>

const ItineraryContainer = (props: IProps) => {
  const dispatch = useDispatch()
  const { wrapper } = styles()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()

  const [filteredShows, setFilteredShows] = useState<Itinerary[]>()
  const [isFiltered, setIsFiltered] = useState<boolean>(false)
  const [hasHistory, setHasHistory] = useState<boolean>(false)
  const [toggleText, setToggleText] = useState('')
  const [propsItineraryBookings, setPropsItineraryBookings] =
    useState<ItineraryBookings>()

  const [getItineraries, { data }] = useLazyGetItineraryListQuery()
  const [getArtist, { data: artistData }] = useLazyGetArtistByKeyQuery()

  const bookingsData = useSelector(
    (state: RootState) => state.itinerary.itineraryBookings,
  )

  const { navigation } = props

  useEffect(() => {
    getItineraries()
      .unwrap()
      .then((res) => {
        setPropsItineraryBookings(res)
      })
      .catch((error) => console.log('err', error))
  }, [])

  useEffect(() => {
    if (propsItineraryBookings != undefined) {
      dispatch(
        setItineraryBookings({ itineraryBookings: propsItineraryBookings }),
      )
      // NOTE: YPE MUST HAVE A '[SYMBOL.ITERATOR]()'
      // make sure you export and are using a lazy query
      getArtist(propsItineraryBookings.itineraryBookings_ArtistKey!)
        .unwrap()
        .then((res) => {})
        .catch((error) => console.log('err', error))

      filterItineraries()
    }
  }, [propsItineraryBookings])

  useEffect(() => {
    if (artistData != null) {
      dispatch(setArtist({ artist: artistData }))
    }
  }, [artistData])

  useEffect(() => {
    if (
      propsItineraryBookings?.itineraryBookings_Bookings?.length !==
        filteredShows?.length &&
      filteredShows !== undefined
    ) {
      setToggleText('All shows')
      setHasHistory(true)
    } else {
      setToggleText('Upcoming shows')
    }
  }, [filteredShows])

  const filterItineraries = () => {
    if (isFiltered) {
      setFilteredShows(propsItineraryBookings?.itineraryBookings_Bookings)
    } else {
      if (isFiltered) {
        setFilteredShows(propsItineraryBookings?.itineraryBookings_Bookings)
      } else {
        const today = new Date()
        var filteredItineraries: Itinerary[] = []

        each(propsItineraryBookings?.itineraryBookings_Bookings, (e) => {
          each(e.itinerary_ItineraryItemList, (f) => {
            var filtered = some(f, function (p) {
              return isAfter(
                new Date(parseInt(f.itineraryItem_DateTime) * 1000),
                addDays(today, -1),
              )
            })
            if (filtered === true) {
              filteredItineraries.push(e)
              return false
            }
          })
        })
        setFilteredShows(filteredItineraries)
      }
    }

    setIsFiltered(!isFiltered)
  }

  return (
    <SafeAreaView>
      <View style={Common.framework.screenWrapper}>
        <ScrollView style={Common.framework.scrollView}>
          <View style={Common.framework.contentWrapper}>
            {hasHistory &&
              propsItineraryBookings?.itineraryBookings_Bookings?.length && (
                <TouchableOpacity
                  onPress={() => {
                    filterItineraries()
                  }}
                  activeOpacity={1}
                  style={{ marginBottom: 10 }}
                >
                  <View>
                    <Label>Toggle</Label>
                  </View>
                </TouchableOpacity>
              )}
            <View>
              {filteredShows &&
                map(filteredShows, (itinerary) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        // https://stackoverflow.com/a/69258989
                        // TODO: why do i need to use as never
                        navigation.navigate(
                          'ItineraryItems' as never,
                          {
                            itineraryItems:
                              itinerary.itinerary_ItineraryItemList,
                          } as never,
                        )
                      }}
                      style={{
                        borderWidth: 1,
                        borderColor: Colors.dark_gray,
                        borderRadius: 5,
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        marginBottom: 10,
                      }}
                      activeOpacity={1}
                      key={itinerary.itinerary_Id}
                    >
                      <Label>{itinerary.itinerary_Name}</Label>
                    </TouchableOpacity>
                  )
                })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ItineraryContainer
