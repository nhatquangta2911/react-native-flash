/* eslint-disable no-undef */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Image } from 'react-native-elements';
import styles from './styles';

class TipsPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'No Title'),
    headerTitleStyle: styles.headerStyle
  });

  render() {
    const { tipsContainer, textStyles, titleStyles, imageStyle } = styles;
    const title = this.props.navigation.getParam('title', 'No Title');
    const image = this.props.navigation.getParam(
      'image',
      'https://avatars3.githubusercontent.com/u/46882767?s=460&v=4'
    );
    return (
      <View style={tipsContainer}>
        <Text style={titleStyles}>Tips & Advices Page</Text>
        <Text style={textStyles}>Coming soon...</Text>
        <Text style={textStyles}>{title}</Text>
        <Image source={{ uri: image }} style={imageStyle} />
      </View>
    );
  }
}

export default withNavigation(TipsPage);
