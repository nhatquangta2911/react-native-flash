import { Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
  headerHeight: 50,
  shadowElevation: 4
};

export const rates = {
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  borderRadius: 2
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
  sm: 12,
  md: 18,
  lg: 28,
  outputText: 60,
  special: 100,
  primary: 'Cochin'
};
