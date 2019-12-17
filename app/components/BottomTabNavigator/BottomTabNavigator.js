/* eslint-disable react/sort-comp */
/* eslint-disable import/imports-first */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BackHandler, Alert } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  SettingPage,
  HomePage,
  QuestionPage,
  SRecordPage,
  BlogPage
} from '../../views';
import { darkPalette, dimensions } from '../../styles/base';
import NavigationService from '../../../NavigationService';

// const Tab = createMaterialBottomTabNavigator();

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
          key: 'Question',
          title: 'Question',
          icon: 'comment',
          color: darkPalette.darkCyan
        },
        {
          key: 'SRecord',
          title: 'SRecord',
          icon: 'book',
          color: darkPalette.darkCyan
        },
        // {
        //   key: 'Community',
        //   title: 'Community',
        //   icon: 'business',
        //   color: darkPalette.darkCyan
        // },
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
    Home: HomePage,
    Question: QuestionPage,
    SRecord: SRecordPage,
    Setting: SettingPage,
    // Community: BlogPage
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
        // barStyle={{ height: (dimensions.fullHeight * 6) / 100 }}
      />
      // <Tab.Navigator
      //   initialRouteName="Home"
      //   activeColor="#e91e63"
      //   labelStyle={{ fontSize: 12 }}
      //   style={{ backgroundColor: "tomato" }}
      // >
      //   <Tab.Screen name="Home" component={HomePage} />
      //   <Tab.Screen name="Question" component={QuestionPage} />
      //   <Tab.Screen name="SRecord" component={SRecordPage} />
      //   <Tab.Screen name="Setting" component={SettingPage} />
      //   <Tab.Screen name="Community" component={BlogPage} />
      // </Tab.Navigator>
    );
  }
}
