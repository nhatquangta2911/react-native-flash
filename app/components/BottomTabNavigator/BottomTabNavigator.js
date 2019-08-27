/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { OrderPage, DemoReduxPage, LoginPage, HomePage } from '../../views';
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
          icon: 'list',
          color: darkPalette.darkCyan
        },
        {
          key: 'Redux',
          title: 'Demo Redux',
          icon: 'edit',
          color: darkPalette.darkOrange
        },
        {
          key: 'Login',
          title: 'Demo Login',
          icon: 'people',
          color: darkPalette.darkPurple
        },
        {
          key: 'Order',
          title: 'Order',
          icon: 'info',
          color: darkPalette.darkGreen
        }
      ]
    };
  }

  handleIndexChange = index => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    Home: HomePage,
    Redux: DemoReduxPage,
    Order: OrderPage,
    Login: LoginPage
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
