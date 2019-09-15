import React from 'react';
import { Text, View } from 'react-native';
import { HomeHeaderItem } from '..';
import styles from './styles';

const { homeHeaderContainer, listItem, textStyle } = styles;

const HomeHeader = () => (
  <View style={homeHeaderContainer}>
    <Text style={textStyle}>Home Header</Text>
    <View style={listItem}>
      <HomeHeaderItem title="Answer More" />
      <HomeHeaderItem title="Your Answers" />
      <HomeHeaderItem title="This Week" />
      <HomeHeaderItem title="Browse Recipes" />
    </View>
  </View>
);

export default HomeHeader;
