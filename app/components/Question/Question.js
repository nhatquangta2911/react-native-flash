/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { Text, TouchableOpacity, Alert, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { Avatar } from 'react-native-paper';
import { fonts } from '../../styles/base';

export class Question extends Component {
  // expandQuestion = ({ type, content, jumpTo }) => {
  //   Alert.alert(
  //     type,
  //     content,
  //     [{ text: 'Cancel', style: 'cancel' }, { text: 'OK', onPress: () => jumpTo('SRecord') }],
  //     { cancelable: true }
  //   );
  // };

  render() {
    const { questionContainer, titleStyle, textStyle, left, right } = styles;
    return (
      <TouchableOpacity
        style={questionContainer}
        onPress={() => this.props.showModal(this.props)}
      >
        <View style={left}>
          {this.props.images && this.props.images.length === 1
            ? this.props.images.map(i => (
                <Avatar.Image source={{ uri: i.toString() }} size={50} />
              ))
            : this.props.images.slice(0, 4).map(i => (
                <Avatar.Image
                  source={{
                    uri: i
                  }}
                  style={{ marginBottom: 4 }}
                  size={35}
                />
              ))}
        </View>
        <View style={right}>
          <Text style={titleStyle} numberOfLines={1}>
            {this.props.question}
          </Text>
          <Text style={textStyle} numberOfLines={1}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Question);
