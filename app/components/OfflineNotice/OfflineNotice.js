/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import styles from './styles';

const { offlineContainer, offlineText } = styles;

const OfflineSign = props => (
  <View style={offlineContainer}>
    <Text style={offlineText}>No Internet Connection</Text>
  </View>
);
class OfflineNotice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConectivityChange);
  }

  handleConectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    const { isConnected } = this.state;
    return !isConnected ? <OfflineSign /> : null;
  }
}

export default OfflineNotice;
