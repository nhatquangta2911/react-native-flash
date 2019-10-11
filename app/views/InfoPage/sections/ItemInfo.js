/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  darkPalette,
  fonts,
  margin,
  padding,
  dimensions,
  text
} from '../../../styles/base';

class ItemInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{this.props.name}</Text>
        <Text style={styles.valueTextStyle}>{this.props.value}</Text>
      </View>
    );
  }
}

export default ItemInfo;

const styles = StyleSheet.create({
  itemContainer: {
    height: dimensions.containerHeight / 12,
    width: dimensions.fullWidth,
    backgroundColor: darkPalette.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: margin.lg,
    borderBottomWidth: 2,
    borderBottomColor: darkPalette.superLightgray
  },
  valueTextStyle: {
    color: darkPalette.darkCyan,
    fontFamily: fonts.thin,
    fontSize: fonts.sm
  },
  textStyle: {
    color: darkPalette.darkGray,
    fontFamily: fonts.thin,
    fontSize: fonts.sm
  }
});
