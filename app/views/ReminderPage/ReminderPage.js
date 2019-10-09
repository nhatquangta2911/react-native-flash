/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class RemainderPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Reminder'
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reminderPage, textStyle } = styles;
    return (
      <View style={reminderPage}>
        <Text style={textStyle}> Remainder </Text>
      </View>
    );
  }
}

export default RemainderPage;
