/* eslint-disable no-undef */
import React from 'react';
import { Header as OriginalHeader } from 'react-native-elements';
import { fonts, darkPalette, sizes } from '../../styles/base';

handleBack = () => {};

const Header = ({
  color = darkPalette.darkPurple,
  leftIconName = 'chevron-left',
  centerTitle = 'Header',
  rightIconName = 'search'
}) => (
  <OriginalHeader
    leftComponent={{
      icon: leftIconName,
      color: darkPalette.white,
      size: fonts.largeIcons,
      onPress: () => this.handleBack()
    }}
    centerComponent={{
      text: centerTitle,
      style: {
        color: darkPalette.white,
        fontFamily: fonts.light,
        fontSize: fonts.headerTextSize
      }
    }}
    rightComponent={{
      icon: rightIconName,
      color: darkPalette.white,
      size: fonts.lg
    }}
    backgroundColor={color}
    containerStyle={{
      marginTop: sizes.offsetTopHeaderAndroid
    }}
  />
);

export default Header;
