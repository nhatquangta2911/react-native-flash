/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Text, Button } from '../../components';
import styles from './styles';
import { headerStyle } from '../../styles/base';

export class StatsPage extends Component {
  static navigationOptions = {
    title: 'Statistic',
    headerTitleStyle: { ...headerStyle }
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  showAlert = () => {
    Alert.alert(
      'Do you want to delete this item?',
      'It seems that there is something wrong?',
      [
        // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.setState({ counter: ++this.state.counter }) }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { statsContainer } = styles;
    return (
      <View style={statsContainer}>
        <Text.TitleText>Statistic Screen</Text.TitleText>
        <Text.CommonText>Coming soon...</Text.CommonText>
        <Text.TitleText>{this.state.counter | 0}</Text.TitleText>
        <Button
          title="Test Alert"
          iconName="list"
          onPress={() => {
            this.showAlert();
          }}
          backgroundColor="#444"
        />
      </View>
    );
  }
}

export default StatsPage;
