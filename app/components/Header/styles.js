import { StyleSheet } from "react-native";
import { colors, dimensions, rates, fonts } from "../../styles/base";

export default StyleSheet.create({
  viewStyle: {
    backgroundColor: colors.backgroundHeader,
    justifyContent: "center",
    alignItems: "center",
    height: dimensions.headerHeight,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: rates.shadowOpacity,
    shadowRadius: rates.shadowRadius,
    elevation: dimensions.shadowElavation,
    position: "relative"
  },
  textStyle: {
    fontSize: fonts.md,
    color: colors.secondary
  }
});
