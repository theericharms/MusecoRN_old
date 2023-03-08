import React, { useState, useEffect } from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  KeyboardType,
  TextInputIOSProps,
  TextInputProps,
  StyleSheetProperties,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native'
import { IconFonts, UIColors, Colors } from '../../Theme/Variables'
import { default as styles } from './styles'
// import Icon from '@/Components/Fonts/Icon'
import { useTheme } from '@/Hooks'
import PropTypes from 'prop-types'
// import Logger from '@/Helpers/Logger'

// interface InputGroupProps extends React.ComponentPropsWithoutRef<'input'> {
//   label: string
// }
// interface ITextfieldProps extends React.ComponentPropsWithoutRef<'input'> {
interface ITextfieldProps {
  placeholder?: string
  isPassword?: boolean
  keyboardType?: KeyboardType
  secureTextEntry?: boolean
  tfValid?: boolean
  children?: React.ReactNode
  multiline?: boolean
  tContentType?: string
  // addPadding,
  frontIcon?: string
  align: string
  marginBottom?: number
  extraStyle?: any
  isEditable: boolean
  hasError: boolean
  overrideIsEditableColor?: boolean
  value?: 'string | number | readonly string[] | undefined'
  isValid?: boolean
  // tContentType: string
  testID?: string
  useErrorBorder: boolean
}

const Textfield = (props: ITextfieldProps) => {
  const {
    placeholder,
    isPassword = false,
    keyboardType = 'default',
    secureTextEntry,
    tfValid,
    children,
    multiline,
    tContentType,
    // addPadding,
    frontIcon,
    align = 'left',
    marginBottom,
    extraStyle,
    isEditable = true,
    hasError = false,
    overrideIsEditableColor = false,
    value,
    isValid,
    maxLength,
    testID,
    useErrorBorder,
  } = props
  const { Fonts } = useTheme()
  const [showPassword, setShowPassword] = useState(true)
  const [eyeColor, setEyeColor] = useState(Colors.dark_gray)
  const [eyeIcon, setEyeIcon] = useState(IconFonts.EYE)
  const [tfBorderColor, setTFBorderColor] = useState(Colors.dark_gray)
  const { Layout } = useTheme()
  const { wrapper, textfield, eye, check, frontIconStyle, fakeCheck } = styles({
    isEditable,
    useErrorBorder,
    hasError: hasError ? true : isValid === false ? true : false, // TODO: Replace hasError with isValid across app, then here
    overrideIsEditableColor,
    align,
    marginBottom,
  })

  const doSetEyeColor = () => {
    // setEyeColor(showPassword ? Colors.BLACK : Colors.GREYIII)
    setEyeIcon(showPassword ? IconFonts.EYECLOSED : IconFonts.EYE)
  }

  // Logger.log('tf props', props)

  useEffect(() => {
    // Logger.log('showPassword', showPassword, isPassword)
    // if(tfValid == undefined)
    // {
    //   setTFBorderColor(UIColors.GLOBAL_BORDERCOLOR)
    // }
    // else
    // {
    //   setTFBorderColor(UIColors.GLOBAL_INVALIDCOLOR)
    // }
  }, [tfValid, showPassword])

  return (
    <View style={[wrapper, extraStyle]}>
      {children && children}
      {!children && (
        <>
          {/* {frontIcon && (
            <Icon
              icon={IconFonts[frontIcon]}
              size={20}
              color={Colors.dark_gray}
              style={frontIconStyle}
            />
          )}
          {isValid && align === 'center' && (
            // <Icon icon={IconFonts.CHECK} style={fakeCheck} size={20} />
          )} */}
          <TextInput
            testID={testID}
            // // multiline={multiline || false}
            placeholder={placeholder}
            placeholderTextColor={Colors.dark_gray}
            style={[
              textfield,
              align === 'center'
                ? { marginLeft: 0 }
                : frontIcon
                ? { marginLeft: 10 }
                : { marginLeft: 20 },
            ]}
            // onFocus={props.onFocus}
            // keyboardType={keyboardType}

            // secureTextEntry={showPassword && isPassword}
            // textContentType={tContentType !== null ? tContentType : 'none'}
            {...props}
          />
        </>
      )}
      {secureTextEntry && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setShowPassword(!showPassword)
            doSetEyeColor()
          }}
        >
          {/* <Icon icon={eyeIcon} style={eye} size={20} color={eyeColor} /> */}
        </TouchableOpacity>
      )}
      {/* {isValid && <Icon icon={IconFonts.CHECK} style={check} size={20} />} */}
    </View>
  )
}

// Textfield.propTypes = {
//   testID: PropTypes.string,
//   isEditable: PropTypes.bool,
//   hasError: PropTypes.bool,
// }

// Textfield.defaultProps = {
//   isEditable: true,
//   hasError: false,
// }

export default Textfield
