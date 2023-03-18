import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { default as styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
// import * as RootNavigation from '@/Navigators/utils.js'
import { sumBy } from 'lodash'
import Utilities from '@/Helpers/Utilities'
// import { useAlertUpdate } from '../../Contexts/AlertProvider/AlertProvider'
// import ClearCart from '@/Store/Cart/ClearCart'
// import { useStripeTerminal } from '@stripe/stripe-terminal-react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faLink,
  faMagnifyingGlassLocation,
  faPlug,
} from '@fortawesome/free-solid-svg-icons'
import { Colors } from '@/Theme/Variables'

const HeaderRightCartButton = () => {
  // const { Type, Common, Fonts, Gutters, Layout } = useTheme()
  // const { disconnectReader, connectedReader } = useStripeTerminal()

  const { wrapper } = styles()

  // const alertUpdate = useAlertUpdate()
  const dispatch = useDispatch()

  // const {} = props
  const [selectedCurrency, setSelectedCurrency] = useState(
    Utilities.getSelectedCurrency(),
  )
  // const cartItems = useSelector((state) => state.cart.currentCart)
  const [cartTotal, setCartTotal] = useState()
  const [bgColor, setBgColor] = useState()

  const orderTotal = () => {
    return selectedCurrency?.value?.icon + cartTotal
  }

  // useEffect(() => {
  //   const total = sumBy(cartItems, 'price')
  //   // setCartTotal(total)
  //   console.log('cart changed', cartTotal)
  //   // setBgColor('black')
  //   // setBgColor(Colors.success)
  //   setTimeout(() => {
  //     // setBgColor(null)
  //   }, 500)
  // }, [cartItems])

  const clearCart = () => {
    // dispatch(ClearCart.action())
    // RootNavigation.navigateAndSimpleReset('StoreHome')
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          // RootNavigation.navigate('ReaderHome')
        }}
        activeOpacity={1}
      >
        <View>
          <FontAwesomeIcon
            icon={faPlug}
            // style={{ color: connectedReader ? Colors.success : Colors.error }}
            size={25}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // RootNavigation.navigate('Cart')
        }}
        onLongPress={() => {
          // if (cartItems.length > 0) {
          // alertUpdate({
          //   title: 'Clear cart?',
          //   message: '',
          //   okBtnText: '',
          //   cancelBtnText: 'Cancel',
          //   hasCancelBtn: true,
          //   showCloseButton: true,
          //   isEnabled: true,
          //   onConfirm: () => {
          //     clearCart()
          //     alertUpdate({ isEnabled: false })
          //   },
          //   onCancel: () => {
          //     alertUpdate({ isEnabled: false })
          //   },
          //   onClose: () => {
          //     alertUpdate({ isEnabled: false })
          //   },
          // })
          // }
        }}
        activeOpacity={1}
        style={{ marginLeft: 5 }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: bgColor ? Colors.success : 'black',
            marginRight: 10,
            padding: 5,
          }}
        >
          <Text style={{ color: 'white' }}>Cart:</Text>
          <Text style={{ color: 'white', marginLeft: 5 }}>
            {/* {`${cartItems.length} @ ${orderTotal()}`} */}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderRightCartButton
