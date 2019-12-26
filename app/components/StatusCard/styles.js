/* eslint-disable no-mixed-operators */
import { StyleSheet } from 'react-native';
import {
  darkPalette,
  fonts,
  dimensions,
  margin,
  colors,
  padding
} from '../../styles/base';

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
    elevation: 2,
    shadowRadius: 2.62,
    borderRadius: 3,
    borderColor: darkPalette.white,
    width: dimensions.fullWidth - 2 * margin.md,
    minHeight: 100,
    marginTop: margin.md,
    padding: padding.sm
  },
  titleStyles: {
    fontFamily: fonts.regular,
    fontSize: fonts.xlg,
    color: darkPalette.black
  },
  statsStyles: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    color: darkPalette.darkCyan
  },
  contentStyles: {
    fontFamily: fonts.light,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
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
