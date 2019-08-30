/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { OrderPage, DemoReduxPage, SettingPage, HomePage } from '../../views';
import { darkPalette, dimensions } from '../../styles/base';

export default class BottomTabNavigator extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {
          key: 'Home',
          title: 'Home',
          icon: 'home',
          color: darkPalette.darkCyan
        },
        {
          key: 'Redux',
          title: 'Demo Redux',
          icon: 'edit',
          color: darkPalette.darkOrange
        },
        {
          key: 'Order',
          title: 'Order',
          icon: 'info',
          color: darkPalette.darkGreen
        },
        {
          key: 'Setting',
          title: 'Setting',
          icon: 'list',
          color: darkPalette.darkPurple
        }
      ]
    };
  }

  handleIndexChange = index => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    Home: HomePage,
    Redux: DemoReduxPage,
    Order: OrderPage,
    Setting: SettingPage
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
        barStyle={{ height: (dimensions.fullHeight * 8) / 100 }}
      />
    );
  }
}
