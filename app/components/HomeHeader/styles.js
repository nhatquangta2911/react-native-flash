/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import {
  dimensions,
  fonts,
  margin,
  padding,
  darkPalette,
  shadow
} from '../../styles/base';

export default StyleSheet.create({
  homeHeaderContainer: {
    width: dimensions.fullWidth - margin.lg,
    height: dimensions.containerHeight / 4.5,
    backgroundColor: darkPalette.white,
    margin: margin.md,
    ...shadow
  },
  status: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: padding.md,
    borderBottomWidth: 1,
    borderBottomColor: darkPalette.superLightgray
  },
  statusLeft: {
    flex: 7,
    justifyContent: 'center'
  },
  statusCenter: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  statusRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  stats: {
    fontFamily: fonts.regular,
    fontSize: fonts.md,
    color: darkPalette.darkGray
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 2
  },
  textStyle: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  }
});
