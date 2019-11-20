/* eslint-disable no-mixed-operators */
import { StyleSheet } from "react-native";
import {
  fonts,
  dimensions,
  margin,
  darkPalette,
  sizes,
  padding
} from "../../styles/base";

export default StyleSheet.create({
  homeContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    height: dimensions.containerHeight / 1.5
  },
  scrollContainer: {},
  tipContainer: {},
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.md
  },
  buttonLoginStyle: {
    margin: margin.md,
    marginVertical: margin.lg,
    borderColor: darkPalette.darkCyan,
    backgroundColor: darkPalette.darkCyan,
    borderRadius: sizes.roundedButtonRadius,
    width: dimensions.fullHeight / 2,
    height: sizes.buttonHeight
  },
  titleButtonLoginStyle: {
    color: darkPalette.white,
    fontSize: fonts.sm,
    fontFamily: fonts.regular
  },
  title: {
    marginVertical: margin.md,
    width: dimensions.fullWidth - 2 * margin.md,
    textAlign: "center",
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray,
    borderBottomColor: darkPalette.lightGray,
    borderStyle: "solid",
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingBottom: padding.sm
  }
});
