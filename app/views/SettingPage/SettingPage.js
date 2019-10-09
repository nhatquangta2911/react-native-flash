/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button, ListItem } from 'react-native-elements';
import { View, Text, ScrollView, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
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
    this.setState({
      user:
        this.props.navigation.getParam('user', { name: 'Shawnnnnnn' }) ||
        (await AsyncStorage.getItem('user'))
    });
  }

  handleLogout = async () => {
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
    const { user, settingList } = this.state;
    console.log(user);
    return (
      <View style={settingContainer}>
        <StatusCard
          title={user && user.name}
          content="How's your day going, buddy?"
          percent={89}
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
