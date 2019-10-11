/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
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
        <Image
          source={require('../../assets/icons/comming-soon.png')}
          style={{ width: 300, height: 225 }}
        />
      </View>
    );
  }
}

export default AboutPage;
