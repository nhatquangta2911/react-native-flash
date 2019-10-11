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
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import { StatusCard } from '../../components';
import { tokenHandler } from '../../utils/token';

class SettingPage extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
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
    await this.getUser();
  }

  getUser = async () => {
    const name = await AsyncStorage.getItem('name');
    const image = await AsyncStorage.getItem('image');
    this.setState({ name, image });
  };

  handleLogout = async () => {
    const logout = new GraphRequest(
      '/me/permissions/',
      { httpMethod: 'DELETE' },
      (error, result) => {
        console.log(result);
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
    const { name, image, settingList } = this.state;
    return (
      <View style={settingContainer}>
        <StatusCard
          title={name}
          content="How's your day going, buddy?"
          percent={89}
          uri={image}
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
            title="LOGOUT"
            type="solid"
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
