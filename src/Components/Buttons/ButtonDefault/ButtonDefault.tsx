import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, StyleProp } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { default as styles } from './styles'
// import Icon from '@/Components/Fonts/Icon'
// import { useTheme } from '@/Theme'
import { delay } from 'lodash'
import PropTypes from 'prop-types'
// import AnalyticsService from '../../../Helpers/AnalyticsService'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faEyeSlash,
  faEye,
  faCheck,
  faMagnifyingGlass,
  faCircleXmark,
  faLock,
} from '@fortawesome/free-solid-svg-icons'

interface IButtonDefault {
  btnBackgroundColor?: string
  btnIcon?: string
  btnIconBefore?: boolean
  label?: string
  onPress: (args?: any) => any | void
  btnType?: string
  btnDisabled?: boolean
  btnOutLineColor?: string
  btnTextColor?: string
  isFullWidth?: boolean
  children?: React.ReactNode
  style?: Object
  negativeBorder?: boolean
  small?: boolean
  isSlideNav?: boolean
  fireBaseEvent?: (args: any) => any
  testID?: string
}

const ButtonDefault: React.FC<IButtonDefault> = (props) => {
  const {
    btnBackgroundColor,
    btnIcon,
    btnIconBefore,
    label,
    onPress,
    btnType,
    btnDisabled = false,
    btnOutLineColor,
    btnTextColor,
    isFullWidth,
    children,
    style,
    negativeBorder,
    small,
    isSlideNav,
    fireBaseEvent,
    testID,
  } = props

  const {
    wrapper_default,
    labelIconWrapper_default,
    label_default,
    icon_default,
    wrapper_cancel,
    label_cancel,
    wrapper_disabled,
    // wrapper,
    label_negative,
  } = styles({
    btnIcon,
    btnBackgroundColor,
    btnOutLineColor,
    btnTextColor,
    isFullWidth,
    small,
    isSlideNav,
  })

  // const [isTemporarilyDisabled, SetIsTemporarilyDisabled] = useState(false)

  const isMounted = useRef()

  // const temporarilyDisable = () => {
  //   SetIsTemporarilyDisabled(true)
  //   delay(() => {
  //     if (isMounted.current) {
  //       SetIsTemporarilyDisabled(false)
  //     }
  //   }, 450)
  // }

  // useEffect(() => {
  //   isMounted.current = true
  //   return () => (isMounted.current = false)
  // }, [])

  return (
    <TouchableOpacity
      activeOpacity={1}
      testID={testID}
      onPress={() => {
        // temporarilyDisable()
        onPress()
        // AnalyticsService.onPressWithAnalytics(onPress, children || label)

        // if (fireBaseEvent) {
        //   AnalyticsService.trackFirebaseFlow({ eventAction: fireBaseEvent })
        // }
      }}
      // disabled={btnDisabled}
      style={[
        wrapper_default,
        btnDisabled
          ? wrapper_disabled
          : btnType === 'cancel'
          ? wrapper_cancel
          : wrapper_default,
        style,
        negativeBorder
          ? { borderColor: Colors.dark_gray, backgroundColor: Colors.white }
          : undefined,
        isFullWidth ? { alignSelf: 'stretch' } : undefined,
        isFullWidth ? { marginRight: 0 } : undefined,
      ]}
    >
      <View style={labelIconWrapper_default}>
        {btnIcon && btnIconBefore && (
          <FontAwesomeIcon icon={faLock} size={20} />
        )}
        <Text
          style={
            negativeBorder
              ? label_negative
              : btnType === 'cancel'
              ? label_cancel
              : label_default
          }
        >
          {children || label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonDefault
