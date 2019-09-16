/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, padding, darkPalette, shadow } from '../../styles/base';

export default StyleSheet.create({
  itemContainer: {
    width: dimensions.fullWidth / 5,
    height: (2 * dimensions.containerHeight) / 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2
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
