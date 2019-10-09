/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class AboutPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'About us'
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { aboutContainer, textStyle } = styles;
    return (
      <View style={aboutContainer}>
        <Text style={textStyle}> About </Text>
      </View>
    );
  }
}

export default AboutPage;
