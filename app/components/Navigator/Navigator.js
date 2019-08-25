/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { OrderPage, DemoReduxPage, LoginPage } from '../../views';
import { darkPalette } from '../../styles/base';

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 2,
      routes: [
        {
          key: 'order',
          title: 'Order',
          icon: 'list',
          color: darkPalette.darkCyan
        },
        {
          key: 'redux',
          title: 'Demo Redux',
          icon: 'edit',
          color: darkPalette.darkOrange
        },
        {
          key: 'login',
          title: 'Demo Login',
          icon: 'people',
          color: darkPalette.darkPurple
        },
        {
          key: 'others',
          title: 'Others',
          icon: 'info',
          color: darkPalette.darkGreen
        }
      ]
    };
  }

  handleIndexChange = index => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    redux: DemoReduxPage,
    order: OrderPage,
    login: LoginPage,
    others: OrderPage
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
      />
    );
  }
}
