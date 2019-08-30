import { StyleSheet } from 'react-native';
import { dimensions, fonts, margin, sizes, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  settingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.containerHeight
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.md
  },
  buttonBackStyle: {
    margin: margin.md,
    marginVertical: margin.lg,
    borderColor: darkPalette.darkCyan,
    backgroundColor: darkPalette.darkCyan,
    borderRadius: sizes.roundedButtonRadius,
    width: dimensions.fullHeight / 2,
    height: sizes.buttonHeight
  },
  titleButtonLoginStyle: {
    color: darkPalette.white,
    fontSize: fonts.sm,
    fontFamily: fonts.regular
  }
});
