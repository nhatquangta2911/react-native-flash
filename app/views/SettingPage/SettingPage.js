/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button, ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import { StatusCard } from '../../components';

class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingList: [
        {
          title: 'Change Your Info',
          icon: 'home'
        },
        {
          title: 'Change Your Info',
          icon: 'home'
        },
        {
          title: 'Change Your Info',
          icon: 'home'
        },
        {
          title: 'Change Your Info',
          icon: 'home'
        }
      ]
    };
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
    const { settingList } = this.state;
    return (
      <View style={settingContainer}>
        <StatusCard title="Hi Shawn" content="How's your day going, buddy?" percent={89} />
        <ScrollView style={scrollContainer}>
          {settingList.map((item, i) => (
            <ListItem
              key={i}
              chevron
              title={item.title}
              titleStyle={textStyles}
              leftIcon={{ name: item.icon }}
              containerStyle={settingItem}
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
