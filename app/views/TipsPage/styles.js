/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import {
  dimensions,
  fonts,
  margin,
  padding,
  darkPalette,
  headerStyle,
  shadow
} from '../../styles/base';

export default StyleSheet.create({
  tipsContainer: {
    height: dimensions.containerHeight,
    margin: margin.md
  },
  imageStyle: {
    width: dimensions.fullWidth - 2 * margin.md,
    height: dimensions.containerHeight / 5,
    ...shadow,
    opacity: 0.8
  },
  headerStyle: {
    ...headerStyle
  },
  titleStyles: {
    fontSize: fonts.md,
    fontFamily: fonts.regular,
    color: darkPalette.darkCyan
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray,
    marginBottom: margin.md
  }
});
