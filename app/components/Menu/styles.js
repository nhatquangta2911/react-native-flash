import { StyleSheet } from 'react-native';
import { colors, rates, padding, margin, fonts } from '../../styles/base';
import { buttonDimensions, buttonColors } from '../../styles/buttons';
import { shadow } from '../../styles/mixin';

export default StyleSheet.create({
  menuContainer: {
    ...shadow,
    marginVertical: margin.sm,
    borderRadius: rates.borderRadius,
    color: colors.borderLight,
    paddingHorizontal: padding.md,
    paddingVertical: padding.md
  },
  menuTitle: {
    fontSize: fonts.md,
    fontWeight: 'bold',
    color: colors.primary
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
    backgroundColor: buttonColors.primary
  },
  buttonChooseContainer: {
    alignItems: 'flex-end'
  }
});
