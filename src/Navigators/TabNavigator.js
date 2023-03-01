// import React, { useEffect } from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import {
//   faFileInvoice,
//   faGear,
//   faRoute,
//   faStore,
// } from '@fortawesome/free-solid-svg-icons'

// import {
//   StoreStackNavigator,
//   ItineraryStackNavigator,
//   CashFlowStackNavigator,
//   SettingsStackNavigator,
// } from './StackNavigators'

// const Tab = createBottomTabNavigator()

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       initialRouteName={'Itinerary'}
//     >
//       <Tab.Screen
//         name="Itinerary"
//         component={ItineraryStackNavigator}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             const iconColor = focused ? 'red' : 'black'
//             return (
//               <FontAwesomeIcon
//                 icon={faRoute}
//                 size={30}
//                 style={{ color: iconColor }}
//               />
//             )
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Store"
//         component={StoreStackNavigator}
//         options={{
//           tabBarShowLabel: false,
//           // tabBarIcon: ({ focused, color, size }) => (
//           //   <FontAwesomeIcon icon={faStore} size={30} />
//           // ),
//           tabBarIcon: ({ focused, color, size }) => {
//             const iconColor = focused ? 'red' : 'black'
//             return (
//               <FontAwesomeIcon
//                 icon={faStore}
//                 size={30}
//                 style={{ color: iconColor }}
//               />
//             )
//           },
//         }}
//       />
//       <Tab.Screen
//         name="CashFlow"
//         component={CashFlowStackNavigator}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             const iconColor = focused ? 'red' : 'black'
//             return (
//               <FontAwesomeIcon
//                 icon={faFileInvoice}
//                 size={30}
//                 style={{ color: iconColor }}
//               />
//             )
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingsStackNavigator}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             const iconColor = focused ? 'red' : 'black'
//             return (
//               <FontAwesomeIcon
//                 icon={faGear}
//                 size={30}
//                 style={{ color: iconColor }}
//               />
//             )
//           },
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

export default BottomTabNavigator
