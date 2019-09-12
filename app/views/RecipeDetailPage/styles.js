/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, padding, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  recipeDetailContainer: {
    backgroundColor: darkPalette.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  }
});
