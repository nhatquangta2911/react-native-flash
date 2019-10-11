/* eslint-disable no-mixed-operators */
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
    color: darkPalette.darkGray,
    marginTop: margin.sm
  },
  secondaryTextStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  },
  explain: {
    fontFamily: 'Nunito-ExtraLight',
    fontSize: 12,
    color: darkPalette.darkGray,
    textAlign: 'right'
  },
  commonButtonStyle: {
    marginVertical: margin.sm,
    borderColor: darkPalette.darkYellow,
    borderWidth: 0.9,
    backgroundColor: darkPalette.darkYellow,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight,
    width: dimensions.fitWidth
  },
  commonNotChosenButtonStyle: {
    marginVertical: margin.sm,
    borderColor: darkPalette.darkCyan,
    borderWidth: 0.9,
    backgroundColor: darkPalette.white,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight,
    width: dimensions.fitWidth - 2 * margin.md
  },
  commonChosenButtonStyle: {
    marginVertical: margin.sm,
    backgroundColor: darkPalette.darkCyan,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight,
    width: dimensions.fitWidth - 2 * margin.md
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
    fontSize: fonts.xsm,
    color: darkPalette.darkCyan,
    textAlign: 'center',
    marginVertical: margin.sm
  },
  contentContainer: {
    backgroundColor: darkPalette.superLightgray,
    marginVertical: margin.lg,
    paddingHorizontal: padding.md,
    paddingVertical: padding.lg
  },
  buttonChoiceContainer: {
    backgroundColor: darkPalette.superLightgray,
    marginVertical: margin.lg,
    paddingHorizontal: padding.md,
    paddingVertical: padding.lg,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSkipStyle: {
    marginVertical: margin.sm,
    borderColor: darkPalette.darkYellow,
    borderWidth: 0.9,
    backgroundColor: darkPalette.white,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight,
    width: dimensions.fitWidth
  },
  buttonSkipTextStyle: {
    color: darkPalette.darkYellow,
    fontSize: fonts.sm,
    fontFamily: fonts.regular
  },
  row: {
    marginBottom: margin.xsm
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
  //TODO: Register 1
});
