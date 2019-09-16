/* eslint-disable global-require */
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { HomeHeaderItem } from '..';
import styles from './styles';
import { darkPalette } from '../../styles/base';

const {
  homeHeaderContainer,
  listItem,
  textStyle,
  status,
  statusLeft,
  statusCenter,
  statusRight,
  stats
} = styles;

const HomeHeader = props => (
  <View style={homeHeaderContainer}>
    {/* <Text style={textStyle}>Hi, Shawn!</Text> */}
    <View style={status}>
      <View style={statusLeft}>
        <Text style={textStyle}>Today's Answers</Text>
      </View>
      <View style={statusCenter}>
        <Text style={stats}>{props.answerNumber}</Text>
      </View>
      <View style={statusRight}>
        <Button
          icon="arrow-forward"
          color={darkPalette.darkGray}
          onPress={() => props.navigation.navigation.navigate('Stats')}
        />
      </View>
    </View>
    <View style={listItem}>
      <HomeHeaderItem
        title="Answer More"
        linkTo="Question"
        jumpTo={props.navigation}
        icon={require('../../assets/icons/icon1.png')}
      />
      <HomeHeaderItem
        title="Your Answers"
        linkTo="SRecord"
        jumpTo={props.navigation}
        icon={require('../../assets/icons/icon2.png')}
      />
      <HomeHeaderItem
        outside
        title="Statistic"
        linkTo="Stats"
        jumpTo={props.navigation}
        icon={require('../../assets/icons/icon3.png')}
      />
      <HomeHeaderItem
        outside
        title="Browse Food"
        linkTo="Browsing"
        jumpTo={props.navigation}
        icon={require('../../assets/icons/icon4.png')}
      />
    </View>
  </View>
);

export default HomeHeader;
