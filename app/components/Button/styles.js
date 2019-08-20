/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import { padding, margin, dimensions } from '../../styles/base';
import { buttonColors } from '../../styles/buttons';

export default StyleSheet.create({
  buttonRNStyles: {
    marginBottom: 10,
    color: buttonColors.textColor,
    height: dimensions.buttonHeight
  },
  iconStyles: {
    marginRight: margin.md
  }
});
