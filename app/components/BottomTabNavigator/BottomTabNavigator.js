/* eslint-disable react/sort-comp */
/* eslint-disable import/imports-first */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import {
  OrderPage,
  DemoReduxPage,
  SettingPage,
  HomePage,
  RecipeDetailPage,
  QuestionPage,
  SRecordPage,
  BlogPage,
  InfoPage,
  DoctorPage,
  ReminderPage,
  AboutPage
} from '../../views';
import {
  darkPalette,
  dimensions,
  bottomTabNav,
  headerStyle
} from '../../styles/base';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { HeaderBackButton } from 'react-navigation-stack';

// const HomeStack = createAppContainer(
//   createStackNavigator({ Landing: HomePage, RecipeDetail: RecipeDetailPage })
// );

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
        {
          key: 'Community',
          title: 'Community',
          icon: 'business',
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
    Home: HomePage,
    Question: QuestionPage,
    SRecord: SRecordPage,
    Setting: createAppContainer(
      createStackNavigator(
        {
          Main: SettingPage,
          Info: InfoPage,
          Doctor: DoctorPage,
          Reminder: ReminderPage,
          About: AboutPage
        },
        {
          initialRouteName: 'Main',
          defaultNavigationOptions: {
            headerTitleStyle: { ...headerStyle },
            headerStyle: { justifyContent: 'space' }
          }
        }
      )
    ),
    Community: BlogPage
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

// const QuestionStack = createStackNavigator(
//   {
//     Question: QuestionPage,
//     QuestionDetail: Question
//   }
// );
