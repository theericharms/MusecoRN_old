import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '@/Theme/Variables'

interface TextFieldStyleProps {
  isEditable: boolean
  hasError: boolean
  overrideIsEditableColor: boolean
  useErrorBorder: boolean
  align?: string
  marginBottom?: number
}

const styles = ({
  isEditable,
  hasError,
  overrideIsEditableColor,
  useErrorBorder,
  align = 'left',
  marginBottom,
}: TextFieldStyleProps) => {
  const getBorderColor = () => {
    if (hasError && useErrorBorder) {
      return 'red'
    }

    if (isEditable) {
      // return Colors.borderSelected
    }

    if (overrideIsEditableColor) {
      return Colors.text
    } else {
      // return Colors.borderOpaque
    }
  }

  console.log('align', align)

  const getTextColor = () => {
    if (isEditable) {
      return Colors.text
    } else {
      if (overrideIsEditableColor) {
        return Colors.text
      } else {
        // return Colors.borderOpaque
      }
    }
  }

  return StyleSheet.create({
    wrapper: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: getBorderColor(),
      marginBottom: 20,
      // paddingVertical: Platform.OS === 'android' ? 5 : 20,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.white,
    },
    textfield: {
      fontFamily: Fonts.ROMAN,
      fontSize: 20,
      flex: 1,
      color: getTextColor(),
      textAlignVertical: 'top',
      // paddingRight: 12,
      textAlign: align != 'left' ? 'center' : 'left',
      marginVertical: Platform.OS === 'android' ? 10 : 20,
    },
    eye: {
      marginRight: 20,
    },
    check: {
      marginRight: 20,
      marginLeft: 10,
      color: Colors.success,
    },
    fakeCheck: {
      marginLeft: 20,
      marginRight: 10,
      color: 'white',
    },
    frontIconStyle: {
      marginLeft: 20,
      flex: 2,
    },
  })
}

export default styles
