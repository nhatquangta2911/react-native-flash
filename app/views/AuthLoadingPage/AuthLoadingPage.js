/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  View,
  Alert
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { fonts, darkPalette, margin } from '../../styles/base';
import styles from './styles';
import Text from '../../components/Text/Text.js';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    this.doAuth();
  }

  doAuth = async () => {
    const userToken = await AsyncStorage.getItem('token');
    const status = await AsyncStorage.getItem('status');
    if (!userToken || status === '0') {
      Alert.alert('Your account has been blocking. Please come back later.');
      this.props.navigation.navigate('Auth');
    } else {
      this.props.navigation.navigate('App');
    }
  };

  render() {
    const {
      greetingContainer,
      greetingText,
      contentText,
      percentText
    } = styles;
    const { value } = this.state;
    const percentValue = Math.round(value * 20) * 5;
    return (
      <View style={greetingContainer}>
        <ActivityIndicator size='large' />
        <Text.CommonText>Loading</Text.CommonText>
        {/* <View>
          <Text style={greetingText}>welcome</Text>
          <Text style={contentText}> how's your day going? </Text>
          <Text style={percentText}>{percentValue > 100 ? 100 : percentValue}%</Text>
          <ProgressBar progress={value} color={darkPalette.darkCyan} />
        </View> */}
      </View>
    );
  }
}

export default AuthLoadingScreen;
