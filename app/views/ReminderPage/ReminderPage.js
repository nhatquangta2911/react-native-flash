/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
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
        <Image
          source={require('../../assets/icons/comming-soon.png')}
          style={{ width: 300, height: 225 }}
        />
      </View>
    );
  }
}

export default RemainderPage;
