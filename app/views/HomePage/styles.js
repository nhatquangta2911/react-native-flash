import { StyleSheet } from 'react-native';
import { fonts, dimensions, margin, darkPalette, sizes } from '../../styles/base';

export default StyleSheet.create({
  homeContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: dimensions.containerHeight
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.md
  },
  buttonLoginStyle: {
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
