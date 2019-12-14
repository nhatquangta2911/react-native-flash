import { StyleSheet } from 'react-native';
import { margin, fonts, darkPalette, dimensions } from '../../styles/base';

export default StyleSheet.create({
  modalContainer: {
    margin: margin.md
  },
  modalTitle: {
    fontSize: fonts.sxl,
    fontFamily: fonts.regular,
    color: darkPalette.darkGray,
    marginBottom: margin.sm
  },
  modalContent: {
    fontSize: fonts.sm,
    fontFamily: fonts.thin,
    color: darkPalette.darkGray,
    marginBottom: margin.md
  },
  scrollContainer: {
    maxHeight: dimensions.containerHeight / 2.2
  }
});
