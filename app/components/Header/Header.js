import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, dimensions, fonts, rates } from '../../styles/base';

const Header = props => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: colors.backgroundHeader,
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.headerHeight,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: rates.shadowOpacity,
    shadowRadius: rates.shadowRadius,
    elevation: dimensions.shadowElavation,
    position: 'relative'
  },
  textStyle: {
    fontSize: fonts.md,
    color: colors.secondary
  }
});

export default Header;
