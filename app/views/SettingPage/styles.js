/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, padding, sizes, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  settingContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: dimensions.containerHeight
  },
  scrollContainer: {
    marginVertical: margin.sm,
    height: dimensions.containerHeight / 2,
    width: dimensions.fullWidth - 2 * margin.md
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.smd
  },
  buttonBackStyle: {
    marginTop: margin.sm,
    borderColor: darkPalette.darkCyan,
    backgroundColor: darkPalette.darkCyan,
    borderRadius: sizes.roundedButtonRadius,
    width: dimensions.fullWidth - 2 * margin.md,
    height: sizes.buttonHeight
  },
  titleButtonLoginStyle: {
    color: darkPalette.white,
    fontSize: fonts.sm,
    fontFamily: fonts.regular
  },
  settingItem: {
    borderBottomColor: darkPalette.superLightgray,
    borderBottomWidth: 1
  }
});
