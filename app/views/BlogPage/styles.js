/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, padding, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  blogContainer: {
    height: dimensions.containerHeight,
    justifyContent: 'center',
    margin: margin.md
  },
  headerStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.md,
    color: darkPalette.darkGray
  },
  titleStyles: {
    fontSize: fonts.md,
    fontFamily: fonts.regular,
    color: darkPalette.darkCyan
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  }
});
