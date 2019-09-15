/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, padding, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  homeHeaderContainer: {
    width: dimensions.fullWidth,
    height: dimensions.containerHeight / 4,
    backgroundColor: darkPalette.white
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: padding.md,
    backgroundColor: darkPalette.lightGray
  },
  textStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  }
});
