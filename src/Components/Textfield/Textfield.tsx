import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardType,
} from 'react-native'
import { Colors } from '@/Theme/Variables'
import { default as styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faEyeSlash,
  faEye,
  faCheck,
  faMagnifyingGlass,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

interface ITextfield {
  isPassword?: boolean
  tSecureTextEntry?: boolean
  tfValid?: boolean
  children?: React.ReactNode
  multiline?: boolean
  frontIcon?: string
  align?: string
  marginBottom?: number
  extraStyle?: any
  isEditable?: boolean
  hasError?: boolean
  overrideIsEditableColor?: boolean
  isValid?: boolean
  useErrorBorder?: boolean
  testID: string
  heading?: string
  onClear?: (args: any) => any | void
  tfRef?: React.Ref<TextInput>
  showDelete?: boolean
  onFocus?: (args?: any) => any | void
  tPlaceholder: string
  onChangeText?: (args?: any) => any | void
  value?: string
  autoCap?: 'none' | 'sentences' | 'words' | 'characters' | undefined
}

const Textfield = (props: ITextfield) => {
  //   const { Fonts } = useTheme()
  const {
    isPassword,
    tSecureTextEntry,
    tfValid,
    children,
    frontIcon,
    align = 'left',
    marginBottom,
    extraStyle,
    isEditable = true,
    hasError = false,
    overrideIsEditableColor = false,
    isValid,
    useErrorBorder = false,
    testID,
    heading,
    onClear,
    tfRef,
    showDelete,
    tPlaceholder,
    onChangeText,
    value,
    autoCap,
  } = props

  const [showPassword, setShowPassword] = useState(false)
  const [eyeColor, setEyeColor] = useState(Colors.dark_gray)
  const [eyeIcon, setEyeIcon] = useState(faEye)
  const [tfBorderColor, setTFBorderColor] = useState(Colors.dark_gray)
  const { wrapper, textfield, eye, check, frontIconStyle, fakeCheck } = styles({
    isEditable,
    useErrorBorder,
    hasError: hasError ? true : isValid === false ? true : false,
    overrideIsEditableColor,
    align,
    marginBottom,
  })

  const doSetEyeColor = () => {
    setEyeColor(showPassword ? Colors.dark_gray : Colors.gray)
    setEyeIcon(showPassword ? faEyeSlash : faEye)
  }

  useEffect(() => {
    // Logger.log('showPassword', showPassword, isPassword)
    if (tfValid == undefined) {
      setTFBorderColor(Colors.dark_gray)
    } else {
      setTFBorderColor(Colors.error)
    }
    console.log('showPassword', showPassword)
    console.log('isPassword', isPassword)
  }, [tfValid, showPassword])

  useEffect(() => {
    if (isPassword) {
      setShowPassword(true)
    }
  }, [])

  return (
    <>
      {heading && <Text style={{ marginBottom: 5 }}>{heading}</Text>}

      <View style={[wrapper, extraStyle]}>
        {children && children}
        {!children && (
          <>
            {frontIcon && (
              <View style={{ marginLeft: 20 }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={20} />
              </View>
            )}
            {isValid && align === 'center' && (
              <FontAwesomeIcon icon={faCheck} size={20} />
            )}
            <TextInput
              testID={testID}
              placeholder={tPlaceholder}
              placeholderTextColor={Colors.dark_gray}
              style={[
                textfield,
                align === 'center'
                  ? { marginLeft: 0 }
                  : frontIcon
                  ? { marginLeft: 10 }
                  : { marginLeft: 20 },
              ]}
              onFocus={props.onFocus}
              ref={tfRef}
              secureTextEntry={isPassword && showPassword}
              onChangeText={onChangeText}
              value={value}
              autoCapitalize={autoCap}
            />
            {showDelete && !tSecureTextEntry && (
              <View style={{ marginRight: 20 }}>
                <TouchableOpacity activeOpacity={1} onPress={onClear}>
                  <FontAwesomeIcon icon={faCircleXmark} size={30} />
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
        {tSecureTextEntry && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setShowPassword(showPassword ? false : true)
              doSetEyeColor()
            }}
          >
            <FontAwesomeIcon
              icon={faEye}
              size={20}
              color={eyeColor}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        )}
        {isValid && <FontAwesomeIcon icon={faCheck} size={20} />}
      </View>
    </>
  )
}

export default Textfield
