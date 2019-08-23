import { StyleSheet } from 'react-native';
import { padding, dimensions, fonts, darkPalette } from '../../styles/base';

export default StyleSheet.create({
  dailyChoiceStyle: {
    marginVertical: padding.md,
    fontSize: fonts.md
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.fullHeight - dimensions.headerHeight
  },
  loadingStyle: {
    color: darkPalette.darkPurple
  }
});
