/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { StatusCard, CustomCarousel, Recipe, HomeHeader } from '../../components';
import { recipes } from '../../statics/entries';

export class HomePage extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null
  };

  render() {
    const { homeContainer, title } = styles;
    const { navigation } = this.props;
    const token = navigation.getParam('token', 'default-token');
    return (
      <View style={homeContainer}>
        <HomeHeader />
        <Text style={title}>Browse Food</Text>
        <CustomCarousel items={recipes} />
        {/* <Text style={title}>Information</Text> */}
        {/* <StatusCard title="Hi Shawn" content="How's your day going, buddy?" percent={89} /> */}
      </View>
    );
  }
}

export default withNavigation(HomePage);
