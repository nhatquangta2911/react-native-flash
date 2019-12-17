/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './styles';

export class Answer extends Component {
  render() {
    const { answerContainer, titleStyle, textStyle, left, right } = styles;
    const imageList =
      this.props.ingredients &&
      this.props.ingredients
        .slice(0, 3)
        .map(i => (
          <Avatar.Image
            source={{ uri: i && i.image && i.image.toString() }}
            size={35}
            style={{ margin: -3 }}
          />
        ));
    return (
      <TouchableOpacity style={answerContainer}>
        <View style={left}>
          <Text style={titleStyle} numberOfLines={1}>
            {this.props.answer}
          </Text>
          <Text style={textStyle} numberOfLines={2}>
            {this.props.answerTime}
          </Text>
        </View>
        <View style={right}>{imageList}</View>
      </TouchableOpacity>
    );
  }
}

export default Answer;
