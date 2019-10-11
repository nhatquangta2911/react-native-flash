/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
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
        <Image
          source={require('../../assets/icons/comming-soon.png')}
          style={{ width: 300, height: 225 }}
        />
      </View>
    );
  }
}

export default DoctorPage;
