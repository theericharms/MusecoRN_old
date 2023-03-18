import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faFileInvoice,
  faGear,
  faRoute,
  faStore,
} from '@fortawesome/free-solid-svg-icons'

import {
  StoreStackNavigator,
  ItineraryStackNavigator,
  CashFlowStackNavigator,
  SettingsStackNavigator,
} from './StackNavigators'
import { ItineraryItem } from '@/Models/ItineraryItem'

export type TabStackParamsList = {
  Itinerary: undefined
  CashFlow: undefined
  MySettings: undefined
  Store: undefined
}

const TabStack = createBottomTabNavigator<TabStackParamsList>()

const BottomTabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Itinerary'}
    >
      <TabStack.Screen
        name="Itinerary"
        component={ItineraryStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            const iconColor = focused ? 'red' : 'black'
            return (
              <FontAwesomeIcon
                icon={faRoute}
                size={30}
                style={{ color: iconColor }}
              />
            )
          },
        }}
      />
      <TabStack.Screen
        name="Store"
        component={StoreStackNavigator}
        options={{
          tabBarShowLabel: false,
          // tabBarIcon: ({ focused, color, size }) => (
          //   <FontAwesomeIcon icon={faStore} size={30} />
          // ),
          tabBarIcon: ({ focused, color, size }) => {
            const iconColor = focused ? 'red' : 'black'
            return (
              <FontAwesomeIcon
                icon={faStore}
                size={30}
                style={{ color: iconColor }}
              />
            )
          },
        }}
      />
      <TabStack.Screen
        name="CashFlow"
        component={CashFlowStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            const iconColor = focused ? 'red' : 'black'
            return (
              <FontAwesomeIcon
                icon={faFileInvoice}
                size={30}
                style={{ color: iconColor }}
              />
            )
          },
        }}
      />
      <TabStack.Screen
        name="MySettings"
        component={SettingsStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            const iconColor = focused ? 'red' : 'black'
            return (
              <FontAwesomeIcon
                icon={faGear}
                size={30}
                style={{ color: iconColor }}
              />
            )
          },
        }}
      />
    </TabStack.Navigator>
  )
}

export default BottomTabNavigator
