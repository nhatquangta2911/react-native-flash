import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export class QuestionPage extends Component {
  render() {
    const { questionContainer, titleStyles, textStyles } = styles;
    return (
      <View style={questionContainer}>
        <Text style={titleStyles}>Thanks for browsing in :) </Text>
        <Text style={textStyles}>It would be great if you could answer any of these question</Text>
      </View>
    );
  }
}

export default QuestionPage;
