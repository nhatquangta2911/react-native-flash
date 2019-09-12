/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import { StatusCard } from '../../components';

class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const { settingContainer, textStyles, titleButtonLoginStyle, buttonBackStyle } = styles;
    return (
      <View style={settingContainer}>
        <Text style={textStyles}>Setting Page</Text>
        <StatusCard title="Hi Shawn" content="How's your day going, buddy?" percent={89} />
        <Button
          title="BACK"
          type="solid"
          titleStyle={titleButtonLoginStyle}
          buttonStyle={buttonBackStyle}
          onPress={() => this.props.jumpTo('Home')}
        />
        <Button
          title="LOGOUT"
          type="solid"
          titleStyle={titleButtonLoginStyle}
          buttonStyle={buttonBackStyle}
          onPress={() => {
            this.handleLogout();
          }}
        />
      </View>
    );
  }
}

export default withNavigation(SettingPage);
