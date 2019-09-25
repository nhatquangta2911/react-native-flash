/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

export class Question extends Component {
  expandQuestion = ({ type, content, jumpTo }) => {
    Alert.alert(
      type,
      content,
      [{ text: 'Cancel', style: 'cancel' }, { text: 'OK', onPress: () => jumpTo('SRecord') }],
      { cancelable: true }
    );
  };

  render() {
    const { questionContainer, titleStyle, textStyle } = styles;
    return (
      <TouchableOpacity style={questionContainer} onPress={() => this.expandQuestion(this.props)}>
        <Text style={titleStyle} numberOfLines={1}>
          {this.props.type}
        </Text>
        <Text style={textStyle} numberOfLines={2}>
          {this.props.content}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Question);
