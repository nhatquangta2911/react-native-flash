import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '../../components';
import styles from './styles';

export class StatsPage extends Component {
  render() {
    const { statsContainer } = styles;
    return (
      <View style={statsContainer}>
        <Text.CommonText>Statistic Screen</Text.CommonText>
        <Text.CommonText>Coming soon...</Text.CommonText>
      </View>
    );
  }
}

export default StatsPage;
