import { StyleSheet } from "react-native";
import { rates, padding, margin, fonts, darkPalette } from "../../styles/base";
import { buttonDimensions, buttonColors } from "../../styles/buttons";
import { shadow } from "../../styles/mixin";

export default StyleSheet.create({
  menuContainer: {
    ...shadow,
    marginVertical: margin.sm,
    color: darkPalette.darkGreen,
    paddingHorizontal: padding.md,
    paddingVertical: padding.md,
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
  menuTitle: {
    fontFamily: fonts.regular,
    fontSize: fonts.lg,
    color: darkPalette.darkCyan
  },
  dishesTitle: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkCyan
  },
  menuDishes: {
    fontFamily: fonts.thin,
    color: darkPalette.darkGray,
    paddingVertical: padding.sm,
    justifyContent: "space-between"
  },
  buttonChooseStyle: {
    paddingVertical: buttonDimensions.buttonPadding,
    paddingHorizontal: buttonDimensions.buttonPadding * 2,
    color: buttonColors.textColor,
    ...shadow,
    borderRadius: rates.borderRadius,
    backgroundColor: darkPalette.darkCyan,
    fontFamily: fonts.thin
  },
  buttonChooseContainer: {
    alignItems: "flex-end"
  }
});
