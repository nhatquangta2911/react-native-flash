/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import styles from './styles';
import { darkPalette } from '../../styles/base';

export class GreetingPage extends Component {
  static navigationOptions = {
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
      if (this.state.value > 1) this.props.navigation.navigate('Login');
      this.setState({
        value: this.state.value + 0.01
      });
    }, 1);
  };

  render() {
    const { value } = this.state;
    const { greetingContainer, greetingText, contentText } = styles;
    return (
      <View style={greetingContainer}>
        <View>
          <Text style={greetingText}>welcome</Text>
          <Text style={contentText}> how's your day going? </Text>
          <ProgressBar progress={value} color={darkPalette.darkCyan} />
        </View>
      </View>
    );
  }
}

export default GreetingPage;
