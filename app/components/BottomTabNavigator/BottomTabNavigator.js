/* eslint-disable import/imports-first */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { OrderPage, DemoReduxPage, SettingPage, HomePage, RecipeDetailPage } from '../../views';
import { darkPalette, dimensions, bottomTabNav } from '../../styles/base';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

const HomeStack = createAppContainer(
  createStackNavigator({ Landing: HomePage, RecipeDetail: RecipeDetailPage })
);

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
          color: darkPalette.darkCyan
        },
        {
          key: 'Order',
          title: 'Order',
          icon: 'info',
          color: darkPalette.darkCyan
        },
        {
          key: 'Setting',
          title: 'Setting',
          icon: 'list',
          color: darkPalette.darkCyan
        }
      ]
    };
  }

  handleIndexChange = index => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    Home: HomeStack,
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
