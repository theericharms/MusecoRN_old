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

import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '@/Navigators/RootStackParamList'


type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>


// import { StoreContainer } from '@/Containers'
// import { StoreDetailContainer } from '@/Containers'
// import { ItineraryContainer } from '@/Containers'
// import { ItineraryDetailContainer } from '@/Containers'
// import { CashFlowContainer } from '@/Containers'
// import { AddCashFlowContainer } from '@/Containers'
// import { EditCashFlowContainer } from '@/Containers'
// import { SettingsContainer } from '@/Containers'
// import { DiscoverReadersContainer } from '@/Containers'
// import { ReaderHomeContainer } from '@/Containers'
// import { LocationsContainer } from '@/Containers'
// import { UpdateReaderContainer } from '@/Containers'
// import { DiscoveryMethodsContainer } from '@/Containers'
// import { ReaderDisplayContainer } from '@/Containers'
// import { CollectCardPaymentContainer } from '@/Containers'
// import { LogListContainer } from '@/Containers'
// import { LogScreenContainer } from '@/Containers'
// import { CartContainer } from '@/Containers'
// import { QRCodeContainer } from '@/Containers'
import { LoginContainer } from '@/Containers'
// import { RefundContainer } from '@/Containers'
// import { RequestGuestlistContainer } from '@/Containers'
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
// import { HeaderRightCartButton } from '@/Components/HeaderRightCartButton'

const Stack = createNativeStackNavigator<RootStackParamList>()

const screenOptionStyle = {
  // headerStyle: {
  //   backgroundColor: '#9AC4F8',
  // },
  // headerTintColor: 'white',
  // headerBackTitle: 'Back',
}
// const StoreStackNavigator = () => {
//   const { initialize } = useStripeTerminal()
//   const [hasPerms, setHasPerms] = useState(false)

//   useEffect(() => {
//     const initAndClear = async () => {
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
//     if (hasPerms) {
//       initAndClear()
//     }
//   }, [initialize, hasPerms])

//   useEffect(() => {
//     async function handlePermissions() {
//       try {
//         const { error } = await requestNeededAndroidPermissions({
//           accessFineLocation: {
//             title: 'Location Permission',
//             message: 'Stripe Terminal needs access to your location',
//             buttonPositive: 'Accept',
//           },
//         })
//         if (!error) {
//           handlePermissionsSuccess()
//         } else {
//           console.error(
//             'Location and BT services are required in order to connect to a reader.',
//           )
//         }
//       } catch (e) {
//         console.error(e)
//       }
//     }
//     if (Platform.OS === 'android') {
//       handlePermissions()
//     } else {
//       handlePermissionsSuccess()
//     }
//   }, [handlePermissionsSuccess])

//   const handlePermissionsSuccess = useCallback(async () => {
//     setHasPerms(true)
//   }, [])

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="StoreHome"
//         component={StoreContainer}
//         options={({ navigation }) => ({
//           title: '',
//           headerRight: () => <HeaderRightCartButton />,
//         })}
//       />
//       <Stack.Screen
//         name="StoreDetail"
//         component={StoreDetailContainer}
//         options={({ navigation }) => ({
//           title: '',
//           headerRight: () => <HeaderRightCartButton />,
//         })}
//       />
//       <Stack.Screen
//         name="Cart"
//         component={CartContainer}
//         options={({ navigation }) => ({
//           title: 'Cart',
//           headerRight: () => <HeaderRightCartButton />,
//         })}
//       />
//       <Stack.Screen
//         name="QRCode"
//         component={QRCodeContainer}
//         options={({ navigation }) => ({
//           title: '',
//           headerRight: () => <HeaderRightCartButton />,
//         })}
//       />
//       <Stack.Screen
//         name="DiscoverReaders"
//         component={DiscoverReadersContainer}
//         options={({ route }) => ({
//           title: 'Discover Readers',
//         })}
//       />
//       <Stack.Screen
//         name="ReaderHome"
//         component={ReaderHomeContainer}
//         options={({ route }) => ({ title: 'Readers' })}
//       />
//       <Stack.Screen
//         name="Locations"
//         component={LocationsContainer}
//         options={({ route }) => ({ title: 'Locations' })}
//       />
//       <Stack.Screen
//         name="UpdateReader"
//         component={UpdateReaderContainer}
//         options={({ route }) => ({ title: 'Update Reader' })}
//       />
//       <Stack.Screen
//         name="DiscoveryMethods"
//         component={DiscoveryMethodsContainer}
//         options={({ route }) => ({ title: 'Discovery Methods' })}
//       />
//       <Stack.Screen
//         name="ReaderDisplay"
//         component={ReaderDisplayContainer}
//         options={({ route }) => ({ title: 'Reader Display' })}
//       />
//       <Stack.Screen
//         name="CollectCardPayment"
//         component={CollectCardPaymentContainer}
//         options={({ route }) => ({ title: 'Reader Display' })}
//       />
//       <Stack.Screen
//         name="LogList"
//         component={LogListContainer}
//         options={({ route }) => ({ title: 'Reader Display' })}
//       />
//       <Stack.Screen
//         name="LogScreen"
//         component={LogScreenContainer}
//         options={({ route }) => ({ title: 'Reader Display' })}
//       />
//       <Stack.Screen
//         name="Refund"
//         component={RefundContainer}
//         options={({ route }) => ({ title: 'Reader Display' })}
//       />
//     </Stack.Navigator>
//   )
// }


const LoginStackNavigator: React.FC<LoginScreenProps> = ({navigation, route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={({ route }) => ({ title: 'Login' })}
      />
    </Stack.Navigator>
  )
}

// const ItineraryStackNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="ItineraryHome">
//       <Stack.Screen
//         name="ItineraryHome"
//         component={ItineraryContainer}
//         options={({ route }) => ({ title: 'Itinerary' })}
//       />
//       <Stack.Screen
//         name="ItineraryDetail"
//         component={ItineraryDetailContainer}
//         options={({ route }) => ({ title: 'Itinerary Details' })}
//       />
//       <Stack.Screen
//         name="RequestGuestlist"
//         component={RequestGuestlistContainer}
//         options={({ route }) => ({ title: 'Guestlist' })}
//       />
//     </Stack.Navigator>
//   )
// }

// CASH FLOW STACK NAVIGATION

// const createCashFlowHeaderRight = navigation => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         navigation.navigate('AddCashFlow')
//       }}
//       activeOpacity={1}
//     >
//       <FontAwesomeIcon
//         icon={faPlus}
//         style={{ alignSelf: 'flex-end', marginRight: 10 }}
//       />
//     </TouchableOpacity>
//   )
// }

// const CashFlowStackNavigator = ({ navigation }) => {
//   return (
//     <Stack.Navigator initialRouteName="CashFlowHome">
//       <Stack.Screen
//         name="CashFlowHome"
//         component={CashFlowContainer}
//         options={({ route }) => ({
//           title: 'Cash Flow',
//           headerRight: () => createCashFlowHeaderRight(navigation),
//         })}
//       />
//       <Stack.Screen
//         name="AddCashFlow"
//         component={AddCashFlowContainer}
//         options={({ route }) => ({ title: '' })}
//       />
//       <Stack.Screen
//         name="EditCashFlow"
//         component={EditCashFlowContainer}
//         options={({ route }) => ({ title: 'Edit Cash Flow' })}
//       />
//     </Stack.Navigator>
//   )
// }

// const SettingsStackNavigator = ({ navigation }) => {
//   return (
//     <Stack.Navigator initialRouteName="MySettings">
//       <Stack.Screen
//         name="MySettings"
//         component={SettingsContainer}
//         options={({ route }) => ({
//           title: 'Settings',
//         })}
//       />
//     </Stack.Navigator>
//   )
// }

export {
//   StoreStackNavigator,
//   ItineraryStackNavigator,
//   CashFlowStackNavigator,
//   SettingsStackNavigator,
  LoginStackNavigator,
}
