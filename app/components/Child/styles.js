/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { colors, fonts, padding } from '../../styles/base';

export default StyleSheet.create({
  childContainer: {
    paddingVertical: padding.lg
  },
  childStyles: {
    fontSize: fonts.special,
    fontFamily: fonts.regular,
    color: colors.textPrimaryColor
  },
  textStyle: {
    fontSize: fonts.xsm,
    fontFamily: fonts.thin,
    color: colors.textPrimaryColor
  }
});
