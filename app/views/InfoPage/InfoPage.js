/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { infoContainer, textStyle } = styles;
    return (
      <View style={infoContainer}>
        <Text style={textStyle}> InfoPage </Text>
      </View>
    );
  }
}

export default InfoPage;
