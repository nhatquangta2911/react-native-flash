/* eslint-disable no-mixed-operators */
import { StyleSheet } from "react-native";
import {
  fonts,
  dimensions,
  margin,
  darkPalette,
  sizes,
  padding,
  shadow
} from "../../styles/base";

export default StyleSheet.create({
  homeContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: dimensions.containerHeight
  },
  oneThird: {
    flex: 1
  },
  twoThird: {
    flex: 1.5
  },
  tipContainer: {
    flex: 1.5,
    alignItems: "center"
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.md
  },
  imageStyle: {
    width: dimensions.fullWidth - 2 * margin.sm,
    height: dimensions.containerHeight / 3,
    ...shadow,
    marginVertical: margin.md
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
