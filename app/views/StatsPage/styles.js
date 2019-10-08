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
  statsContainer: {
    height: dimensions.containerHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: darkPalette.superLightgray
  },
  chartContainer: {
    width: dimensions.fitWidth,
    backgroundColor: darkPalette.white,
    alignItems: 'center',
    margin: margin.sm,
    paddingVertical: padding.sm,
    ...shadow
  },
  titleStyles: {
    fontSize: fonts.md,
    fontFamily: fonts.thin,
    color: darkPalette.lightGray,
    marginBottom: margin.sm,
    marginTop: margin.sm
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  }
});
