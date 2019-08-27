/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, ActivityIndicator, StatusBar, View, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { fonts, darkPalette, margin } from '../../styles/base';
import styles from './styles';

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

  // componentWillUnmount() {
  //   setInterval(() => {
  //     if (this.state.value >= 1) {
  //       this.props.navigation.navigate('AuthLoading');
  //       return;
  //     }
  //     this.setState({
  //       value: this.state.value + 0.01
  //     });
  //   }, 1);
  // }

  doAuth = async () => {
    const userToken = await AsyncStorage.getItem('token');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    const { greetingContainer, greetingText, contentText, percentText } = styles;
    const { value } = this.state;
    const percentValue = Math.round(value * 20) * 5;
    return (
      <View style={greetingContainer}>
        <ActivityIndicator size="large" />
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
