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
  answerContainer: {
    backgroundColor: darkPalette.white,
    // height: dimensions.containerHeight / 8,
    padding: padding.md,
    marginVertical: margin.sm,
    flexDirection: 'row'
  },
  left: {
    flex: 2
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  titleStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.md,
    color: darkPalette.darkCyan
  },
  textStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm - 2,
    color: darkPalette.darkGray
  }
});
