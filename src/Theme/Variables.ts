/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

/**
 * Colors
 */
export interface IColorsStyle {
  transparent: string
  inputBackground: string
  white: string
  text: string
  primary: string
  success: string
  error: string
  blurple: string
  blurple_dark: string
  blue: string
  light_gray: string
  dark_gray: string
  slate: string
  gray: string
  red: string
  black: string
}

export const Colors: IColorsStyle = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',

  blurple: '#635BFF',
  blurple_dark: '#5851DF',
  blue: '#007bff',
  light_gray: '#F6F9FC',
  dark_gray: '#425466',
  slate: '#0A2540',
  gray: '#A3B3C1',
  red: '#ff3a30',
  black: '#000000',
}

export const NavigationColors = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export interface IFontSize {
  xsmall: number
  small: number
  regular: number
  semiLarge: number
  large: number
}

export const FontSize: IFontSize = {
  xsmall: 14,
  small: 16,
  regular: 20,
  semiLarge: 25,
  large: 30,
}

export interface IFonts {
  LIGHT: string
  LIGHTITALIC: string
  ROMAN: string
  ROMANITALIC: string
  BOOK: string
  BOOKITALIC: string
  MEDIUM: string
  MEDIUMITALIC: string
  BOLD: string
  BOLDITALIC: string
}

export const Fonts: IFonts = {
  LIGHT: 'Avenir-Light',
  LIGHTITALIC: 'Avenir-LightOblique',
  ROMAN: 'Avenir-Roman',
  ROMANITALIC: 'Avenir-RomanOblique',
  BOOK: 'Avenir-Book',
  BOOKITALIC: 'Avenir-BookOblique',
  MEDIUM: 'Avenir-Medium',
  MEDIUMITALIC: 'Avenir-MediumOblique',
  BOLD: 'Avenir-Heavy',
  BOLDITALIC: 'Avenir-BoldOblique',
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export interface IIconFonts {
  iconName: string
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
