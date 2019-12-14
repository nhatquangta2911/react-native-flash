/* eslint-disable no-mixed-operators */
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
    height: dimensions.containerHeight,
    justifyContent: 'flex-start',
    marginHorizontal: margin.md
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
  titleContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  scrollContainer: {
    flex: 8,
    justifyContent: 'center'
  },
  scroll: {
    height: (dimensions.containerHeight * 7) / 8
  }
});
