/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import {
  fonts,
  darkPalette,
  margin,
  padding,
  dimensions,
  text
} from '../../styles/base';

export default StyleSheet.create({
  doctorContainer: {
    backgroundColor: darkPalette.white,
    width: dimensions.fullWidth,
    height: dimensions.containerHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: { ...text }
});
