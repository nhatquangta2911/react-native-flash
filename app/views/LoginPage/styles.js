/* eslint-disable import/imports-first */
/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { dimensions, rates, colors, padding, margin, fonts } from '../../styles/base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  loginPageContainer: {
    height: dimensions.fullHeight
  },
  logo: {
    width: wp('100%'),
    height: hp('50%'),
    backgroundColor: colors.secondary
  }
});
