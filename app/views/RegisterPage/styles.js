/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import {
  dimensions,
  fonts,
  margin,
  padding,
  sizes,
  darkPalette
} from '../../styles/base';

export default StyleSheet.create({
  registerContainer: {
    height: dimensions.containerHeight,
    justifyContent: 'center',
    margin: margin.md
  },
  headerStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  },
  titleStyles: {
    fontSize: fonts.lg,
    fontFamily: fonts.regular,
    color: darkPalette.darkCyan
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  },
  secondaryTextStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.lightGray,
    marginVertical: margin.sm
  },
  commonButtonStyle: {
    marginVertical: margin.sm,
    borderColor: darkPalette.darkCyan,
    borderWidth: 1,
    backgroundColor: darkPalette.white,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight
  },
  textButtonStyles: {
    color: darkPalette.white,
    fontSize: fonts.sm,
    fontFamily: fonts.regular
  },
  commonButtonTextStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkCyan
  }
});
