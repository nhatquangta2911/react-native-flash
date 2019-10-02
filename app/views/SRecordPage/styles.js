/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import {
  dimensions,
  fonts,
  margin,
  padding,
  darkPalette
} from '../../styles/base';

export default StyleSheet.create({
  questionContainer: {
    height: dimensions.containerHeight,
    justifyContent: 'flex-start',
    margin: margin.md
  },
  scrollContainer: {
    height: 350,
    marginBottom: margin.sm,
    marginHorizontal: 1
  },
  searchBar: {
    marginVertical: margin.sm
  },
  mainContent: {
    justifyContent: 'flex-start'
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
  },
  dateStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.md,
    color: darkPalette.white,
    marginVertical: margin.sm,
    backgroundColor: darkPalette.darkOrange,
    paddingVertical: padding.md,
    paddingHorizontal: padding.sm
  }
});
