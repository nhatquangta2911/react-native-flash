import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/base';

export default StyleSheet.create({
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
