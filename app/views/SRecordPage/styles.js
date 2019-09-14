/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, padding, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  questionContainer: {
    height: dimensions.containerHeight,
    justifyContent: 'center',
    margin: margin.md
  },
  searchBar: {
    flex: 1
  },
  mainContent: {
    flex: 5,
    justifyContent: 'center'
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
