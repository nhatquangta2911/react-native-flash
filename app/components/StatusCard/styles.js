/* eslint-disable no-mixed-operators */
import { StyleSheet } from 'react-native';
import { darkPalette, fonts, dimensions, margin, colors, padding } from '../../styles/base';

export default StyleSheet.create({
  statusCardContainer: {
    flexDirection: 'row',
    backgroundColor: darkPalette.white,
    shadowColor: darkPalette.darkGray,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
    borderRadius: 3,
    borderColor: darkPalette.white,
    width: dimensions.fullWidth - 2 * margin.md,
    minHeight: 100,
    marginTop: margin.md,
    padding: padding.sm
  },
  titleStyles: {
    fontFamily: fonts.regular,
    fontSize: fonts.md,
    color: colors.secondary
  },
  statsStyles: {
    fontFamily: fonts.regular,
    fontSize: fonts.lg,
    color: darkPalette.darkCyan
  },
  contentStyles: {
    fontFamily: fonts.light,
    fontSize: fonts.sm,
    color: colors.tertiary
  },
  statusCardLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusCardCenter: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: margin.md
  },
  statusCardRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: margin.sm
  }
});
