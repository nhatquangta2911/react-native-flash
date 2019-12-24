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
    justifyContent: 'center',
    flex: 1
  },
  banner: {
    flex: 1
  },
  logoContainer: {
    flexDirection: 'row',
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 20
  },
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
    color: darkPalette.darkCyan,
    marginLeft: 8
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
    height: sizes.buttonHeight * 1.2
  },
  titleButtonLoginStyle: {
    color: darkPalette.white,
    fontSize: fonts.md,
    fontFamily: fonts.regular
  },
  inputStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.text,
    color: darkPalette.darkCyan
  }
});
