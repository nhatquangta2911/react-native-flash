import { Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
  headerHeight: 50,
  shadowElavation: 4
};

export const rates = {
  shadowOpacity: 0.23,
  shadowRadius: 2.62
};

export const colors = {
  primary: '#834FE2',
  secondary: '#444444',
  tertiary: '#888888',
  backgroundHeader: '#f1f1f1',
  textPrimaryColor: '#3d3d3d',
  loadingColor: '#834FE2'
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 25,
  xl: 30
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Cochin'
};
