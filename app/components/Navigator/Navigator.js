/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { OrderPage, DemoReduxPage, LoginPage } from '../../views';
import { fonts, template, lightPalette, darkPalette } from '../../styles/base';

// const DemoReduxPage = () => <DemoReduxPage />;
// const OrderPage = () => <OrderPage />;

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'order', title: 'Order', icon: 'list', color: darkPalette.darkCyan },
        { key: 'redux', title: 'Demo Redux', icon: 'edit', color: darkPalette.darkOrange },
        { key: 'login', title: 'Demo Login', icon: 'people', color: darkPalette.darkPurple },
        { key: 'others', title: 'Others', icon: 'info', color: darkPalette.darkGreen }
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
