/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import {
  dimensions,
  fonts,
  margin,
  padding,
  darkPalette,
  shadow,
  sizes
} from '../../styles/base';

export default StyleSheet.create({
  questionContainer: {
    height: dimensions.containerHeight - 20,
    justifyContent: 'space-between',
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
  scroll: {},
  commonButtonStyle: {
    marginVertical: margin.sm,
    borderColor: darkPalette.darkYellow,
    borderWidth: 0.9,
    backgroundColor: darkPalette.darkYellow,
    borderRadius: sizes.roundedButtonRadius,
    height: sizes.buttonHeight,
    width: dimensions.fitWidth
  },
  commonButtonTextStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    color: darkPalette.white
  }
});
