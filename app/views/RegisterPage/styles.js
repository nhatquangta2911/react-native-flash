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
    color: darkPalette.darkGray
  },
  explain: {
    fontFamily: 'Nunito-ExtraLightItalic',
    fontSize: fonts.xsm,
    color: darkPalette.superLightgray
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
  contentContainer: {
    backgroundColor: darkPalette.superLightgray,
    marginVertical: margin.lg,
    paddingHorizontal: padding.md,
    paddingVertical: padding.lg
  },
  row: {
    marginBottom: margin.md
  },
  rowButton: {
    marginBottom: margin.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  commonHalfButtonStyle: {
    borderColor: darkPalette.darkCyan,
    borderWidth: 1,
    backgroundColor: darkPalette.white,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight / 1.3,
    width: dimensions.fitWidth / 2.2
  },
  commonHalfButtonTextStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    color: darkPalette.darkCyan
  },
  commonChosenHalfButtonStyle: {
    backgroundColor: darkPalette.darkCyan,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight / 1.3,
    width: dimensions.fitWidth / 2.2
  },
  commonChosenHalfButtonTextStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    color: darkPalette.white
  },
  commonThirdButtonStyle: {
    borderColor: darkPalette.darkCyan,
    borderWidth: 1,
    backgroundColor: darkPalette.white,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight / 1.3,
    width: dimensions.fitWidth / 4.2
  },
  commonThirdButtonTextStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    color: darkPalette.darkCyan
  },
  commonChosenThirdButtonStyle: {
    backgroundColor: darkPalette.darkCyan,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight / 1.3,
    width: dimensions.fitWidth / 4
  },
  commonChosenThirdButtonTextStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    color: darkPalette.white
  }
});
