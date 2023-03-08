import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '@/Theme/Variables'
import { FontSize } from '@/Theme/Variables'

interface IButtonDefaultStyles {
  btnBackgroundColor?: string
  btnOutLineColor?: string
  btnTextColor?: string
  isFullWidth?: boolean
  small?: boolean
  isSlideNav?: boolean
  btnIcon?: string
}

const styles = ({
  btnBackgroundColor,
  btnOutLineColor,
  btnTextColor,
  isFullWidth = false,
  small = false,
  isSlideNav = false,
}: IButtonDefaultStyles) =>
  StyleSheet.create({
    wrapper_base: {
      borderRadius: 4,
      borderWidth: 2,
      alignItems: 'center',
      alignSelf: 'flex-start',
      // alignSelf: isSlideNav ? 'flex-start' : 'center',
    },
    wrapper_default: {
      // backgroundColor:
      //   btnBackgroundColor || UIColors.DEFAULT_BUTTON_BACKGROUNDCOLOR,
      borderColor: btnOutLineColor || Colors.dark_gray,
      borderWidth: 1,
      borderRadius: 5,
      alignSelf: isFullWidth ? 'auto' : 'center',
      opacity: 1,
    },
    wrapper_disabled: {
      // backgroundColor: UIColors.DEFAULT_BUTTON_BACKGROUNDCOLOR,
      // borderColor: btnOutLineColor || UIColors.DEFAULT_BUTTON_BACKGROUNDCOLOR,
      alignSelf: 'center',
      opacity: 0.5,
    },
    // cancel
    wrapper_cancel: {
      // backgroundColor: Colors.WHITE,
      // borderColor:
      //   btnBackgroundColor || UIColors.DEFAULT_BUTTON_BACKGROUNDCOLOR,
      // marginLeft: isFullWidth ? 0 : 10,
      alignSelf: 'center',
    },
    labelIconWrapper_default: {
      marginHorizontal: small ? 10 : 20,
      marginVertical: small ? 5 : 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    label_default: {
      // color: btnTextColor || UIColors.DEFAULT_LABEL_COLOR,
      fontFamily: Fonts.ROMAN,
      fontSize: small ? FontSize.small : FontSize.regular,
      textAlign: 'center',
    },
    icon_default: {
      marginRight: 10,
      // color: btnTextColor || UIColors.DEFAULT_LABEL_ICONCOLOR,
    },
    label_cancel: {
      // color: btnTextColor || UIColors.DEFAULT_BUTTON_BACKGROUNDCOLOR,
      fontFamily: Fonts.ROMAN,
      fontSize: small ? FontSize.small : FontSize.regular,
      textAlign: 'center',
    },
    label_negative: {
      // color: Colors.borderOpaque,
      // fontFamily: Fonts.Regular,
      fontSize: small ? FontSize.small : FontSize.regular,
      textAlign: 'center',
    },
  })

export default styles
