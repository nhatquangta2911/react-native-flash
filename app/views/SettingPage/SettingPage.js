/* eslint-disable react/sort-comp */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button, ListItem } from 'react-native-elements';
import { View, Text, ScrollView, Alert } from 'react-native';
import {
  GraphRequestManager,
  GraphRequest,
  LoginManager
} from 'react-native-fbsdk';
import {
  withNavigation,
  StackActions,
  SwitchActions,
  NavigationActions
} from 'react-navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import { StatusCard } from '../../components';
import { tokenHandler } from '../../utils/token';
import { UserApi } from '../../utils/api';

class SettingPage extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      user: '',
      settingList: [
        {
          route: 'Info',
          title: 'Change Your Info',
          icon: 'list'
        },
        {
          route: 'Doctor',
          title: 'Your Private Doctor ',
          icon: 'list'
        },
        {
          route: 'Reminder',
          title: 'Reminder',
          icon: 'list'
        },
        {
          route: 'About',
          title: 'About us',
          icon: 'list'
        }
      ]
    };
  }

  async componentDidMount() {
    await this.getId();
    UserApi.get(this.state.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  getId = async () => {
    const id = await AsyncStorage.getItem('id');
    this.setState({ id });
  };

  handleLogout = async () => {
    const logout = new GraphRequest(
      '/me/permissions/',
      { httpMethod: 'DELETE' },
      (error, result) => {
        if (error) {
          console.log('Error fetching data: ' + error.toString());
        } else {
          LoginManager.logOut();
        }
      }
    );
    new GraphRequestManager().addRequest(logout).start();
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const {
      settingContainer,
      textStyles,
      titleButtonLoginStyle,
      buttonBackStyle,
      scrollContainer,
      settingItem
    } = styles;
    const { id, user, settingList } = this.state;
    console.log(id, user);
    return (
      <View style={settingContainer}>
        <StatusCard
          title={user.name}
          content="How's your day going, buddy?"
          percent={`GOAL    5 / 10 questions`}
          uri={user.picture}
        />

        <ScrollView style={scrollContainer}>
          {settingList.map((item, i) => (
            <ListItem
              key={i}
              chevron
              title={item.title}
              titleStyle={textStyles}
              leftIcon={{ name: item.icon }}
              containerStyle={settingItem}
              onPress={() =>
                this.props.navigation.navigate(item.route, {
                  title: item.route
                })
              }
            />
          ))}
          <Button
            title='LOGOUT'
            type='solid'
            titleStyle={titleButtonLoginStyle}
            buttonStyle={buttonBackStyle}
            onPress={() => {
              this.handleLogout();
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(SettingPage);
