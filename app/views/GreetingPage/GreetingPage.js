/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import styles from './styles';
import { darkPalette } from '../../styles/base';

export class GreetingPage extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    this.makeItRun();
  }

  makeItRun = () => {
    setInterval(() => {
      if (this.state.value > 1) {
        this.props.navigation.navigate('AuthLoading');
        return;
      }
      this.setState({
        value: this.state.value + 0.01
      });
    }, 1);
  };

  render() {
    const { value } = this.state;
    console.log(value);
    const { greetingContainer, greetingText, contentText, percentText } = styles;
    const percentValue = Math.round(value * 20) * 5;
    return (
      <View style={greetingContainer}>
        <View>
          <Text style={greetingText}>welcome</Text>
          <Text style={contentText}> how's your day going? </Text>
          <Text style={percentText}>{percentValue > 100 ? 100 : percentValue}%</Text>
          <ProgressBar progress={value} color={darkPalette.darkCyan} />
        </View>
      </View>
    );
  }
}

export default GreetingPage;
