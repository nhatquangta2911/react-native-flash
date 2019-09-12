/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
import { StyleSheet } from 'react-native';
import { dimensions, margin, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  carouselContainer: {
    width: dimensions.fullWidth,
    height: dimensions.fullHeight / 3 + margin.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: margin.md
  }
});
