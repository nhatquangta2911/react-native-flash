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
import { relative } from 'path';

export default StyleSheet.create({
  infoContainer: {
    backgroundColor: darkPalette.superLightgray,
    width: dimensions.fullWidth,
    height: dimensions.containerHeight,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textStyle: { ...text },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }
});
