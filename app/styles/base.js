/* eslint-disable no-mixed-operators */
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

export const text = {
  fontFamily: 'Nunito-ExtraLight',
  fontSize: 14,
  color: '#444'
};

export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 2,
  borderRadius: 3,
  borderColor: '#fff'
};

export const headerStyle = {
  fontFamily: 'Nunito-ExtraLight',
  fontSize: 16,
  color: '#444',
  padding: 0,
  marginLeft: 8
};

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
  fitWidth: Dimensions.get('window').width - 2 * 10,
  headerHeight: 50,
  buttonHeight: 45,
  shadowElevation: 4,
  containerHeight: (Dimensions.get('window').height * 92) / 100
};

export const rates = {
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  borderRadius: 2
};

export const bottomTabNav = {
  main1: '#575D90',
  main2: '#595F72',
  main3: '#5CC8FF',
  main4: '#F15946',
  main5: '#00CFC1'
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
  darkPurple: '#976FE8',
  darkCyan: '#17A2B8',
  darkGreen: '#70AE6E',
  darkYellow: '#FCB524',
  darkOrange: '#EF754F',
  facebook: '#29487D',
  backgroundOpacity: '#ffffff60',
  white: '#fff',
  black: '#000',
  darkGray: '#444',
  lightGray: '#888',
  superLightgray: '#f9f9f9'
};

export const notification = {
  success: '#28A745',
  danger: '#dc3545',
  warning: '#FFC107',
  info: '#17A2B8',
  lightGray: '#F8F9FA',
  primary: '#007BFF',
  secondary: '#6C757D',
  dark: '#343A40',
  white: '#FFFFFF'
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
  xl: 20,
  xxl: 30,
  special: 50
};

export const nutrientColor = {
  carbs: '#FCB524',
  fat: '#52C0BC',
  protein: '#976FE8',
  fiber: '#444444',
  cal: '#EF754F'
};

export const fonts = {
  xsm: 12,
  sm: 14,
  smd: 16,
  md: 18,
  lg: 18,
  xl: 40,
  text: 17,
  headerTextSize: 22,
  outputText: 60,
  special: 100,
  largeIcon: 34,
  //TODO: Change thin font for better display in VD
  thin: 'Nunito-Light',
  light: 'Nunito-ExtraLight',
  regular: 'Nunito-Regular',
  semibold: 'Nunito-SemiBold',
  bold: 'Nunito-Black'
};
