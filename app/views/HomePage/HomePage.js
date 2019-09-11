/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { StatusCard } from '../../components';

export class HomePage extends Component {
  handleLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const { homeContainer, textStyles, titleButtonLoginStyle, buttonLoginStyle } = styles;
    const { navigation } = this.props;
    const token = navigation.getParam('token', 'default-token');
    return (
      <View style={homeContainer}>
        <StatusCard title="Hi Shawn" content="How's your day going, buddy?" percent={89} />
        <StatusCard 
          title="Hi Ben" 
          content="How's your day going, buddy?" 
          percent={52}
          isOnline={false} 
          uri="https://i.pinimg.com/originals/1d/bf/58/1dbf5857d7b912d83067a1c2c6a9a222.jpg" 
        />
        <Button
          title="LOGOUT"
          type="solid"
          titleStyle={titleButtonLoginStyle}
          buttonStyle={buttonLoginStyle}
          onPress={() => {
            this.handleLogout();
          }}
        />
      </View>
    );
  }
}

export default withNavigation(HomePage);
