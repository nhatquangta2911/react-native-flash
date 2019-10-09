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
  aboutContainer: {
    backgroundColor: darkPalette.superLightgray,
    width: dimensions.fitWidth,
    height: dimensions.containerHeight
  },
  textStyle: { ...text }
});
