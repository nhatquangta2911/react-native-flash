/* eslint-disable no-unused-vars */
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const { itemContainer, textStyle } = styles;

const HomeHeaderItem = ({ title, icon }) => (
  <View style={itemContainer}>
    <Text style={textStyle}>{title}</Text>
  </View>
);

export default HomeHeaderItem;
