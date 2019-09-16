/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, padding, darkPalette, shadow } from '../../styles/base';

export default StyleSheet.create({
  itemContainer: {
    width: dimensions.fullWidth / 5,
    height: (1 * dimensions.containerHeight) / 8,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  iconWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 2
  },
  iconStyle: {
    height: dimensions.containerHeight / 12 - margin.md,
    width: dimensions.containerHeight / 12 - margin.md
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textStyle: {
    fontFamily: fonts.thin,
    fontSize: fonts.xsm,
    color: darkPalette.darkGray
  }
});
