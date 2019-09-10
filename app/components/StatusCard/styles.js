/* eslint-disable no-mixed-operators */
import { StyleSheet } from 'react-native';
import { darkPalette, fonts, dimensions, margin, colors, padding } from '../../styles/base';

export default StyleSheet.create({
  statusCardContainer: {
    flexDirection: 'row',
    backgroundColor: darkPalette.white,
    shadowColor: darkPalette.darkCyan,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 3,
    borderColor: darkPalette.white,
    width: dimensions.fullWidth - 2 * margin.md,
    minHeight: 100,
    marginTop: margin.md,
    padding: padding.sm
  },
  titleStyles: {
    fontFamily: fonts.regular,
    fontSize: fonts.lg,
    color: colors.secondary
  },
  statsStyles: {
    fontFamily: fonts.regular,
    fontSize: fonts.xl,
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  statusCardRight: {
    flex: 1,
    justifyContent: 'center'
  }
});
