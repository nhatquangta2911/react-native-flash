import { StyleSheet } from 'react-native';
import { rates, padding, margin, fonts, darkPalette } from '../../styles/base';
import { buttonDimensions, buttonColors } from '../../styles/buttons';
import { shadow } from '../../styles/mixin';

export default StyleSheet.create({
  menuContainer: {
    ...shadow,
    marginVertical: margin.sm,
    borderRadius: rates.borderRadius,
    color: darkPalette.darkGreen,
    paddingHorizontal: padding.md,
    paddingVertical: padding.md
  },
  menuTitle: {
    fontSize: fonts.md,
    fontWeight: 'bold',
    color: darkPalette.darkCyan
  },
  menuDishes: {
    paddingVertical: padding.sm,
    justifyContent: 'space-between'
  },
  buttonChooseStyle: {
    paddingVertical: buttonDimensions.buttonPadding,
    paddingHorizontal: buttonDimensions.buttonPadding * 2,
    color: buttonColors.textColor,
    ...shadow,
    borderRadius: rates.borderRadius,
    backgroundColor: darkPalette.darkCyan
  },
  buttonChooseContainer: {
    alignItems: 'flex-end'
  }
});
