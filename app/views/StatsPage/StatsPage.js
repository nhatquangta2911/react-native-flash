import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export class StatsPage extends Component {
  render() {
    const { statsContainer, titleStyles, textStyles } = styles;
    return (
      <View style={statsContainer}>
        <Text style={titleStyles}> Stats Page </Text>
        <Text style={textStyles}> Coming soon... </Text>
      </View>
    );
  }
}

export default StatsPage;
