/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { darkPalette, headerStyle } from '../../styles/base';

class InfoPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Your Info'
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { infoContainer, textStyle } = styles;
    return (
      <View style={infoContainer}>
        <Text style={textStyle}> Info </Text>
      </View>
    );
  }
}

export default InfoPage;