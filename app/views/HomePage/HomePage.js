/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { StatusCard, CustomCarousel, Recipe, HomeHeader, ImageCarousel } from '../../components';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    headerMode: 'none',
    header: null
  };

  render() {
    const { homeContainer, title, scrollContainer } = styles;
    return (
      <View style={homeContainer}>
        <HomeHeader navigation={this.props} answerNumber={5} />
        <ScrollView style={scrollContainer}>
          <Text style={title}>Tips & Advice</Text>
          <ImageCarousel />
          <Text style={title}>Blogs</Text>
          <ImageCarousel />
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(HomePage);
