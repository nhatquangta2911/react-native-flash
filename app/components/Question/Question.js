/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export class Question extends Component {
  render() {
    const { questionContainer, titleStyle, textStyle } = styles;
    return (
      <TouchableOpacity style={questionContainer}>
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

export default Question;
