import { StyleSheet } from 'react-native';
import { fonts, dimensions, margin, darkPalette, sizes } from '../../styles/base';

export default StyleSheet.create({
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.containerHeight
  },
  textStyles: {
    fontFamily: fonts.thin,
    fontSize: fonts.xl
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
    fontFamily: fonts.bold
  }
});
