import { StyleSheet } from 'react-native';
import { margin, fonts, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  modalContainer: {
    margin: margin.md
  },
  modalTitle: {
    fontSize: fonts.xl,
    fontFamily: fonts.regular,
    color: darkPalette.darkPurple,
    marginBottom: margin.sm
  },
  modalContent: {
    fontSize: fonts.sm,
    fontFamily: fonts.thin,
    color: darkPalette.darkPurple,
    marginBottom: margin.md
  }
});
