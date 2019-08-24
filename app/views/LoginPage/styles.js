/* eslint-disable import/imports-first */
/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, rates, colors, padding, margin, fonts, darkPalette } from '../../styles/base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

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
    color: darkPalette.darkPurple
  },
  textLogo: {
    fontSize: fonts.xl,
    fontFamily: fonts.light,
    color: darkPalette.darkPurple
  }
});
