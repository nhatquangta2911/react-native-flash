/* eslint-disable no-unused-vars */
import { StyleSheet } from "react-native";
import {
  fonts,
  darkPalette,
  margin,
  padding,
  dimensions
} from "../../styles/base";

export default StyleSheet.create({
  recipeContainer: {
    backgroundColor: darkPalette.white,
    minHeight: dimensions.fullHeight / 3,
    width: (2.1 * dimensions.fullWidth) / 3,
    marginHorizontal: margin.sm,
    shadowColor: darkPalette.darkGray,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    elevation: 2,
    shadowRadius: 2.62,
    borderRadius: 3,
    borderColor: darkPalette.white
  },
  recipeHeader: {
    flex: 6
  },
  recipeContent: {
    flex: 4,
    padding: padding.md,
    flexDirection: "column"
  },
  titleStyles: {
    fontFamily: fonts.regular,
    fontSize: fonts.md,
    color: darkPalette.darkGray
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  },
  title: {
    flex: 1,
    justifyContent: "flex-start"
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  }
});
