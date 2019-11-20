/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export class Answer extends Component {
  render() {
    const { answerContainer, titleStyle, textStyle } = styles;
    return (
      <TouchableOpacity style={answerContainer}>
        <Text style={titleStyle} numberOfLines={1}>
          {this.props.answer}
        </Text>
        <Text style={textStyle} numberOfLines={2}>
          {this.props.answerTime}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Answer;
