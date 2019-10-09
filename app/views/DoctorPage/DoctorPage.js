/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class DoctorPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Your Private Doctor'
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { doctorContainer, textStyle } = styles;
    return (
      <View style={doctorContainer}>
        <Text style={textStyle}> Doctor </Text>
      </View>
    );
  }
}

export default DoctorPage;
