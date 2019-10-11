/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import styles from './styles';

const { onlineContainer, onlineText } = styles;

const OnlineSign = props => (
  <View style={onlineContainer}>
    <Text style={onlineText}>You're now online</Text>
  </View>
);
class OnlineNotice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConectivityChange
    );
  }

  handleConectivityChange = isConnected => {
    if (isConnected) {
      this.setState({
        isConnected
      });
      setTimeout(() => {
        this.setState({ isConnected: !isConnected });
      }, 1000);
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    const { isConnected } = this.state;
    return isConnected ? <OnlineSign /> : null;
  }
}

export default OnlineNotice;
