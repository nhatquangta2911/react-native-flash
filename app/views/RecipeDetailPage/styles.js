/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import {
  dimensions,
  fonts,
  margin,
  padding,
  darkPalette,
  textStyles
} from '../../styles/base';

export default StyleSheet.create({
  recipeDetailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: padding.md
  },
  scrollContainer: {
    width: dimensions.fitWidth
  },
  nutrientStyle: {
    backgroundColor: darkPalette.white,
    width: dimensions.fullWidth * 0.95
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray,
    paddingHorizontal: padding.sm,
    marginVertical: margin.sm
  },
  headerText: {
    fontFamily: fonts.semibold,
    fontSize: fonts.sm,
    backgroundColor: darkPalette.superLightgray,
    color: darkPalette.darkGray,
    marginVertical: margin.sm,
    padding: padding.md
  },
  imageStyle: {
    width: dimensions.fullWidth - 2 * margin.md,
    height: dimensions.fullHeight / 4,
    opacity: 0.8,
    borderRadius: 5
  },
  nutrientContainer: {
    paddingHorizontal: padding.sm
  }
});
