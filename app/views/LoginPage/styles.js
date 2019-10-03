/* eslint-disable import/imports-first */
/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import {
  fonts,
  darkPalette,
  margin,
  sizes,
  dimensions
} from '../../styles/base';

export default StyleSheet.create({
  loginContainer: {
    fontSize: fonts.md,
    fontFamily: fonts.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1
  },
  logoContainer: { flex: 2, justifyContent: 'center', alignItems: 'center' },
  contentContainer: { flex: 3 },
  textStyle: {
    fontSize: fonts.sm,
    fontFamily: fonts.light,
    textAlign: 'center',
    color: darkPalette.darkCyan
  },
  textLogo: {
    fontSize: fonts.xl,
    fontFamily: fonts.thin,
    color: darkPalette.darkCyan
  },
  buttonLoginStyle: {
    margin: margin.md,
    marginVertical: margin.lg,
    borderColor: darkPalette.darkCyan,
    backgroundColor: darkPalette.darkCyan,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight
  },
  buttonLoginFBStyle: {
    marginHorizontal: margin.md,
    backgroundColor: darkPalette.facebook,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight
  },
  titleButtonLoginStyle: {
    color: darkPalette.white,
    fontSize: fonts.sm,
    fontFamily: fonts.regular
  },
  inputStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.text,
    color: darkPalette.darkCyan
  }
});
