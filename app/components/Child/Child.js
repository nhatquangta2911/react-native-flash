import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Child extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
  }

  render() {
    const { childStyles } = styles;
    return (
      <View>
        <Text style={childStyles}>{this.props.counter}</Text>
      </View>
    );
  }
}

export default Child;
