/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import {
  dimensions,
  fonts,
  margin,
  padding,
  darkPalette,
  shadow
} from '../../styles/base';

export default StyleSheet.create({
  questionContainer: {
    backgroundColor: darkPalette.white,
    // height: dimensions.containerHeight / 7,
    padding: padding.md,
    paddingVertical: padding.lg,
    marginVertical: margin.sm,
    flexDirection: 'row'
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    marginLeft: 0
  },
  right: {
    flex: 4
  },
  rank: {
    fontFamily: fonts.bold,
    fontSize: fonts.lg,
    color: darkPalette.darkOrange
  },
  titleStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.smd,
    color: darkPalette.darkCyan
  },
  textStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  }
});
