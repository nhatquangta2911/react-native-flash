/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, padding, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  itemContainer: {
    width: dimensions.fullWidth / 5,
    height: dimensions.containerHeight / 6,
    backgroundColor: darkPalette.darkCyan,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.white
  }
});
