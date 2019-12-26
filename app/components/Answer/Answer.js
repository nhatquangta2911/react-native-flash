/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';
import { withNavigation, NavigationActions } from 'react-navigation';
import styles from './styles';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: this.props.ingredients && this.props.ingredients[0]
    };
  }
  handleBrowsing = () => {
    this.props.navigation.navigate('Details', {
      name: this.state.first.name,
      image: this.state.first.image,
      nutrients: this.state.first
    });
  };
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
      <TouchableOpacity
        style={answerContainer}
        onPress={() => this.handleBrowsing()}
      >
        <View style={left}>
          <Text style={titleStyle} numberOfLines={1}>
            {this.props.answer}
          </Text>
          <Text style={textStyle} numberOfLines={2}>
            Answerd Time: {this.props.answerTime}
          </Text>
        </View>
        <View style={right}>{imageList}</View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Answer);
