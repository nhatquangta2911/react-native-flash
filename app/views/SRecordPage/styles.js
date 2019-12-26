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
    marginBottom: margin.sm,
    marginHorizontal: 1
    // height: dimensions.containerHeight / 3.5
  },
  searchBar: {
    marginVertical: margin.sm,
    alignItems: 'flex-end'
  },
  mainContent: {
    justifyContent: 'flex-start'
  },
  titleStyles: {
    fontSize: fonts.xlg,
    fontFamily: fonts.regular,
    color: darkPalette.black
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  },
  pickDateTextStyles: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    color: darkPalette.white,
    backgroundColor: darkPalette.darkYellow,
    paddingHorizontal: margin.lg,
    paddingVertical: margin.sm,
    width: dimensions.fullWidth / 2.3,
    borderRadius: 5,
    textAlign: 'center'
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
