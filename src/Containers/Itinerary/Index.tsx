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

  // const [itineraryBookings, setItineraryBookings] =
  //   useState<ItineraryBookings>()

  const [getItineraries, { data: shows }] = useLazyGetItineraryListQuery()

  const [getArtist, { data: artistData }] = useLazyGetArtistByKeyQuery()

  const bookingsData = useSelector(
    (state: RootState) => state.itinerary.itineraryBookings,
  )

  const { navigation } = props

  useEffect(() => {
    getItineraries()
      .unwrap()
      .then((res) => {
        console.log('data', res)
        // doFilteredItineraries(res.itineraryBookings_Bookings)
        setFilteredShows(res.itineraryBookings_Bookings)
      })
      .catch((error) => console.log('err', error))
  }, [])

  useEffect(() => {
    if (shows != undefined) {
      // filterShows()

      // console.log('bookingsData aa', shows.itineraryBookings_ArtistId)
      dispatch(setItineraryBookings({ itineraryBookings: shows }))

      // NOTE: YPE MUST HAVE A '[SYMBOL.ITERATOR]()'
      // make sure you export and are using a lazy query
      getArtist(shows.itineraryBookings_ArtistKey!)
        .unwrap()
        .then((res) => {
          // console.log('artist', res)
        })
        .catch((error) => console.log('err', error))
    }
  }, [shows])

  useEffect(() => {
    if (artistData != null) {
      dispatch(setArtist({ artist: artistData }))
    }
  }, [artistData])

  const filterShows = (res: Itinerary[] | undefined) => {
    console.log('filterShows', '')
    const today = new Date()
    var filteredItineraryBookings: Itinerary[] = []

    // each(res, (e) => {
    //   var filtered = some(e.itinerary_ItineraryItemList, function (o) {
    //     return isAfter(
    //       new Date(parseInt(o.itineraryItem_DateTime) * 1000),
    //       addDays(today, -1),
    //     )
    //   })
    //   if (filtered) {
    //     filteredItineraryBookings.push(e)
    //   }
    // })

    // console.log('filteredItineraryBookings', filteredItineraryBookings)

    setFilteredShows(res)
  }

  const doFilteredItineraries = () => {
    if (filteredShows?.length !== shows?.itineraryBookings_Bookings?.length) {
      console.log('doFilteredItineraries', '')
      if (isFiltered) {
        setFilteredShows(shows?.itineraryBookings_Bookings)
      } else {
        const today = new Date()
        var filteredItineraries: Itinerary[] = []

        each(shows?.itineraryBookings_Bookings, (e) => {
          each(e.itinerary_ItineraryItemList, (f) => {
            var filtered = some(f, function (p) {
              return isAfter(
                new Date(parseInt(f.itineraryItem_DateTime) * 1000),
                addDays(today, -1),
              )
            })
            console.log('before', filtered)
            console.log('before2', e)
            if (filtered != null) {
              filteredItineraries.push(e)
            }
          })
        })

        setFilteredShows([])
        console.log('filteredItineraries', filteredItineraries)
        setFilteredShows(filteredItineraries)
      }

      setIsFiltered(!isFiltered)
    }
  }

  return (
    <SafeAreaView>
      <View style={Common.framework.screenWrapper}>
        <ScrollView style={Common.framework.scrollView}>
          <View style={Common.framework.contentWrapper}>
            {filteredShows?.length !==
              shows?.itineraryBookings_Bookings?.length && (
              <TouchableOpacity
                onPress={() => {
                  doFilteredItineraries()
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
