/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export class Answer extends Component {
  render() {
    const { answerContainer, titleStyle, textStyle } = styles;
    return (
      <TouchableOpacity style={answerContainer}>
        <Text style={textStyle} numberOfLines={1}>
          {this.props.answer}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Answer;
