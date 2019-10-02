/* eslint-disable no-underscore-dangle */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import {
  StatusCard,
  CustomCarousel,
  Recipe,
  HomeHeader,
  ImageCarousel
} from '../../components';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  static navigationOptions = {
    headerMode: 'none',
    header: null
  };

  _onRefresh = () => {
    this.setState({
      refreshing: true
    });
    setTimeout(() => {
      this.setState({
        refreshing: false
      });
    }, 500);
  };

  render() {
    const { homeContainer, title, scrollContainer } = styles;
    const { refreshing } = this.state;
    return (
      <View style={homeContainer}>
        <HomeHeader navigation={this.props} answerNumber={9} />
        <ScrollView
          style={scrollContainer}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => this._onRefresh()}
            />
          }
        >
          <Text style={title}>Tips & Advice</Text>
          <ImageCarousel />
          <Divider />
          <Text style={title}>Blogs</Text>
          <ImageCarousel />
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(HomePage);
