import { Dimensions, StatusBar } from 'react-native';

export const sizes = {
  xxsm: 10,
  xsm: 12,
  sm: 14,
  md: 18,
  lg: 32,
  xl: 40,
  xxl: 60,
  text: 18,
  buttonHeight: 40,
  roundedButtonRadius: 20,
  androidHeader: 70,
  offsetTopHeaderAndroid: (StatusBar.currentHeight || 0) * -1,
  iOSHeader: 70,
  special: 100
};

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
  headerHeight: 50,
  buttonHeight: 45,
  shadowElevation: 4
};

export const rates = {
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  borderRadius: 2
};

export const template = {
  reddish: '#ED6A5A',
  beige: '#F4F1BB',
  lightBlueish: '#9BC1BC',
  mixedViolet: '#5D576B',
  lightGray: '#E6EBE0'
};

export const lightPalette = {
  lightBlue: '#BC46F6',
  lightOrange: '#F3C98B',
  lightLipstick: '#DAA588',
  lightBrown: '#C46D5E',
  lightRed: '#F56960'
};

export const darkPalette = {
  darkPurple: '#503960',
  darkCyan: '#3C6E71',
  darkGreen: '#70AE6E',
  darkYellow: '#BEEE62',
  darkOrange: '#F4743B',
  white: '#fff'
};

export const colors = {
  primary: '#5A4BAD',
  secondary: '#444444',
  tertiary: '#888888',
  backgroundHeader: '#f1f1f1',
  textPrimaryColor: '#3d3d3d',
  loadingColor: '#834FE2',
  borderLight: '#eeeeee',
  buttonTextColor: '#ffffff',
  iconColor: '#ffffff'
};

export const padding = {
  sm: 5,
  md: 10,
  lg: 15,
  xl: 20
};

export const margin = {
  sm: 5,
  md: 10,
  lg: 15,
  xl: 20
};

export const fonts = {
  sm: 14,
  md: 18,
  lg: 28,
  xl: 40,
  outputText: 60,
  special: 100,
  light: 'Nunito-Light',
  regular: 'Nunito-Regular',
  bold: 'Nunito-Black',
  thin: 'Nunito-ExtraLight'
};
