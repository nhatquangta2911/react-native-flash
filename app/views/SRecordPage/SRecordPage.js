import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export class SRecordPage extends Component {
  render() {
    const { questionContainer, titleStyles, textStyles } = styles;
    return (
      <View style={questionContainer}>
        <Text style={titleStyles}>SRecord</Text>
        <Text style={textStyles}>This is all you need</Text>
      </View>
    );
  }
}

export default SRecordPage;
