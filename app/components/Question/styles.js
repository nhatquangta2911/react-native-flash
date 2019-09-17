/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, padding, darkPalette, shadow } from '../../styles/base';

export default StyleSheet.create({
  questionContainer: {
    backgroundColor: darkPalette.white,
    height: dimensions.containerHeight / 7,
    padding: padding.md,
    marginVertical: margin.sm
  },
  titleStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.md,
    color: darkPalette.darkCyan
  },
  textStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  }
});
