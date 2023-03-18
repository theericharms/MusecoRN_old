import React, { useEffect, useState, useCallback } from 'react'
import {
  Button,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native'

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
// import RootStackParamList from '@/Navigators/RootStackParamList'
import { StoreContainer } from '@/Containers'
import { StoreDetailContainer } from '@/Containers'
import { ItineraryContainer } from '@/Containers'
import { ItineraryItemsContainer } from '@/Containers'
import { ItineraryItemDetailContainer } from '@/Containers'
import { CashFlowContainer } from '@/Containers'
import { AddCashFlowContainer } from '@/Containers'
import { EditCashFlowContainer } from '@/Containers'
import { SettingsContainer } from '@/Containers'
import { DiscoverReadersContainer } from '@/Containers'
import { ReaderHomeContainer } from '@/Containers'
import { LocationsContainer } from '@/Containers'
import { UpdateReaderContainer } from '@/Containers'
import { DiscoveryMethodsContainer } from '@/Containers'
import { ReaderDisplayContainer } from '@/Containers'
import { CollectCardPaymentContainer } from '@/Containers'
import { LogListContainer } from '@/Containers'
import { LogScreenContainer } from '@/Containers'
import { CartContainer } from '@/Containers'
import { QRCodeContainer } from '@/Containers'
import { LoginContainer } from '@/Containers'
import { RefundContainer } from '@/Containers'
import { RequestGuestlistContainer } from '@/Containers'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { RefundContainer } from '@/Containers'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import {
//   faArrowUpRightFromSquare,
//   faPlus,
// } from '@fortawesome/free-solid-svg-icons'
// import { store } from '@/Store'
// import {
//   useStripeTerminal,
//   requestNeededAndroidPermissions,
// } from '@stripe/stripe-terminal-react-native'
import { HeaderRightCartButton } from '@/Components/HeaderRightCartButton'
import { ItineraryItem } from '@/Models/ItineraryItem'

const screenOptionStyle = {
  // headerStyle: {
  //   backgroundColor: '#9AC4F8',
  // },
  // headerTintColor: 'white',
  // headerBackTitle: 'Back',
}

export type StoreStackParamsList = {
  StoreHome: undefined
  StoreDetail: undefined
  Cart: undefined
  QRCode: undefined
  DiscoverReaders: undefined
  ReaderHome: undefined
  Locations: undefined
  UpdateReader: undefined
  DiscoveryMethods: undefined
  ReaderDisplay: undefined
  CollectCardPayment: undefined
  LogList: undefined
  LogScreen: undefined
  Refund: undefined
}

const StoreStack = createStackNavigator<StoreStackParamsList>()

const StoreStackNavigator = () => {
  // const { initialize } = useStripeTerminal()
  // const [hasPerms, setHasPerms] = useState(false)

  // useEffect(() => {
  //   const initAndClear = async () => {
  //   const { error, reader } = await initialize()

  //   if (error) {
  //     Alert.alert('StripeTerminal init failed', error.message)
  //     return
  //   }

  //   if (reader) {
  //     console.log(
  //       'StripeTerminal has been initialized properly and connected to the reader',
  //       reader,
  //     )
  //     return
  //   }

  //   console.log('StripeTerminal has been initialized properly')
  // }
  //   if (hasPerms) {
  //     initAndClear()
  //   }
  // }, [initialize, hasPerms])

  // useEffect(() => {
  //   async function handlePermissions() {
  //     try {
  //       const { error } = await requestNeededAndroidPermissions({
  //         accessFineLocation: {
  //           title: 'Location Permission',
  //           message: 'Stripe Terminal needs access to your location',
  //           buttonPositive: 'Accept',
  //         },
  //       })
  //       if (!error) {
  //         handlePermissionsSuccess()
  //       } else {
  //         console.error(
  //           'Location and BT services are required in order to connect to a reader.',
  //         )
  //       }
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }
  //   if (Platform.OS === 'android') {
  //     handlePermissions()
  //   } else {
  //     handlePermissionsSuccess()
  //   }
  // }, [handlePermissionsSuccess])

  // const handlePermissionsSuccess = useCallback(async () => {
  //   setHasPerms(true)
  // }, [])

  return (
    <StoreStack.Navigator>
      <StoreStack.Screen
        name="StoreHome"
        component={StoreContainer}
        options={({ navigation }) => ({
          title: '',
          headerRight: () => <HeaderRightCartButton />,
        })}
      />
      <StoreStack.Screen
        name="StoreDetail"
        component={StoreDetailContainer}
        options={({ navigation }) => ({
          title: '',
          headerRight: () => <HeaderRightCartButton />,
        })}
      />
      <StoreStack.Screen
        name="Cart"
        component={CartContainer}
        options={({ navigation }) => ({
          title: 'Cart',
          headerRight: () => <HeaderRightCartButton />,
        })}
      />
      <StoreStack.Screen
        name="QRCode"
        component={QRCodeContainer}
        options={({ navigation }) => ({
          title: '',
          headerRight: () => <HeaderRightCartButton />,
        })}
      />
      <StoreStack.Screen
        name="DiscoverReaders"
        component={DiscoverReadersContainer}
        options={({ route }) => ({
          title: 'Discover Readers',
        })}
      />
      <StoreStack.Screen
        name="ReaderHome"
        component={ReaderHomeContainer}
        options={({ route }) => ({ title: 'Readers' })}
      />
      <StoreStack.Screen
        name="Locations"
        component={LocationsContainer}
        options={({ route }) => ({ title: 'Locations' })}
      />
      <StoreStack.Screen
        name="UpdateReader"
        component={UpdateReaderContainer}
        options={({ route }) => ({ title: 'Update Reader' })}
      />
      <StoreStack.Screen
        name="DiscoveryMethods"
        component={DiscoveryMethodsContainer}
        options={({ route }) => ({ title: 'Discovery Methods' })}
      />
      <StoreStack.Screen
        name="ReaderDisplay"
        component={ReaderDisplayContainer}
        options={({ route }) => ({ title: 'Reader Display' })}
      />
      <StoreStack.Screen
        name="CollectCardPayment"
        component={CollectCardPaymentContainer}
        options={({ route }) => ({ title: 'Reader Display' })}
      />
      <StoreStack.Screen
        name="LogList"
        component={LogListContainer}
        options={({ route }) => ({ title: 'Reader Display' })}
      />
      <StoreStack.Screen
        name="LogScreen"
        component={LogScreenContainer}
        options={({ route }) => ({ title: 'Reader Display' })}
      />
      <StoreStack.Screen
        name="Refund"
        component={RefundContainer}
        options={({ route }) => ({ title: 'Reader Display' })}
      />
    </StoreStack.Navigator>
  )
}

export type ItineraryStackParamsList = {
  ItineraryHome: undefined
  ItineraryItems: {
    itineraryItems: ItineraryItem[]
  }
  ItineraryItemDetail: {
    pageTitle: string
    itineraryItem: ItineraryItem
  }
  RequestGuestlist: undefined
}

const ItineraryStack = createStackNavigator<ItineraryStackParamsList>()

const ItineraryStackNavigator = ({ navigation }: any) => {
  return (
    <ItineraryStack.Navigator initialRouteName="ItineraryHome">
      <ItineraryStack.Screen
        name="ItineraryHome"
        component={ItineraryContainer}
        options={() => ({ title: 'Itineraries' })}
      />
      <ItineraryStack.Screen
        name="ItineraryItems"
        component={ItineraryItemsContainer}
        options={() => ({ title: 'Shows', headerBackTitle: ' ' })}
      />
      <ItineraryStack.Screen
        name="ItineraryItemDetail"
        component={ItineraryItemDetailContainer}
        options={({ route }) => ({
          title: route?.params?.pageTitle,
          headerBackTitle: ' ',
        })}
      />
      <ItineraryStack.Screen
        name="RequestGuestlist"
        component={RequestGuestlistContainer}
        options={({ route }) => ({ title: 'Guestlist' })}
      />
    </ItineraryStack.Navigator>
  )
}

// CASH FLOW STACK NAVIGATION

const createCashFlowHeaderRight = (navigation) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AddCashFlow')
      }}
      activeOpacity={1}
    >
      <FontAwesomeIcon
        icon={faPlus}
        style={{ alignSelf: 'flex-end', marginRight: 10 }}
      />
    </TouchableOpacity>
  )
}

export type CashFlowStackParamsList = {
  CashFlowHome: undefined
  AddCashFlow: undefined
  EditCashFlow: undefined
}

const CashFlowStack = createStackNavigator<CashFlowStackParamsList>()

const CashFlowStackNavigator = ({ navigation }) => {
  return (
    <CashFlowStack.Navigator initialRouteName="CashFlowHome">
      <CashFlowStack.Screen
        name="CashFlowHome"
        component={CashFlowContainer}
        options={({ route }) => ({
          title: 'Cash Flow',
          headerRight: () => createCashFlowHeaderRight(navigation),
        })}
      />
      <CashFlowStack.Screen
        name="AddCashFlow"
        component={AddCashFlowContainer}
        options={({ route }) => ({ title: '' })}
      />
      <CashFlowStack.Screen
        name="EditCashFlow"
        component={EditCashFlowContainer}
        options={({ route }) => ({ title: 'Edit Cash Flow' })}
      />
    </CashFlowStack.Navigator>
  )
}

export type SettingsStackParamsList = {
  Settings: undefined
}

const SettingsStack = createStackNavigator<SettingsStackParamsList>()

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen
        name="Settings"
        component={SettingsContainer}
        options={() => ({
          title: 'Settings',
        })}
      />
    </SettingsStack.Navigator>
  )
}

export {
  ItineraryStackNavigator,
  StoreStackNavigator,
  CashFlowStackNavigator,
  SettingsStackNavigator,
}
