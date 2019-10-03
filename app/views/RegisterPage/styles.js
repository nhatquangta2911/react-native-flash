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
    justifyContent: 'flex-start',
    margin: margin.md
  },
  headerStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.smd,
    color: darkPalette.darkGray
  },
  titleStyles: {
    fontSize: fonts.lg,
    fontFamily: fonts.regular,
    color: darkPalette.darkCyan,
    textAlign: 'center'
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  },
  secondaryTextStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.lightGray
  },
  commonButtonStyle: {
    marginVertical: margin.sm,
    borderColor: darkPalette.darkCyan,
    borderWidth: 1,
    backgroundColor: darkPalette.darkCyan,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight
  },
  textButtonStyles: {
    color: darkPalette.white,
    fontSize: fonts.sm,
    fontFamily: fonts.regular
  },
  commonButtonTextStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    color: darkPalette.white
  },
  logoutStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkOrange,
    textAlign: 'right',
    marginHorizontal: margin.sm
  },
  allChoiceStyle: {},
  contentContainer: {
    backgroundColor: darkPalette.white,
    marginVertical: margin.lg,
    height: dimensions.containerHeight / 2
  },
  row: {
    marginBottom: margin.sm
  }
});
