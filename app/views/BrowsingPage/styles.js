/* eslint-disable no-unused-vars */
import { StyleSheet } from "react-native";
import {
  dimensions,
  fonts,
  margin,
  padding,
  darkPalette
} from "../../styles/base";

export default StyleSheet.create({
  browsingContainer: {
    height: dimensions.containerHeight,
    margin: margin.md
  },
  titleStyles: {
    fontSize: fonts.md,
    fontFamily: fonts.regular,
    color: darkPalette.darkCyan,
    marginBottom: margin.md
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray,
    marginVertical: margin.sm
  }
});
