/* eslint-disable no-undef */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
        {/* <Text style={titleStyles}>Tips & Advices Page</Text> */}
        {/* <Text style={textStyles}>Coming soon...</Text> */}
        <Text style={titleStyles} numberOfLines={2}>
          {title}
        </Text>
        <Image source={{ uri: image }} style={imageStyle} />
        <ScrollView>
          <Text style={textStyles}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reiciendis deserunt
            velit autem pariatur ratione voluptas quaerat eaque distinctio ex laudantium deleniti
            dolores officia eum quo sit repudiandae, fugit incidunt!
          </Text>
          <Text style={textStyles}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reiciendis deserunt
            velit autem pariatur ratione voluptas quaerat eaque distinctio ex laudantium deleniti
            dolores officia eum quo sit repudiandae, fugit incidunt!
          </Text>
          <Text style={textStyles}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reiciendis deserunt
            velit autem pariatur ratione voluptas quaerat eaque distinctio ex laudantium deleniti
            dolores officia eum quo sit repudiandae, fugit incidunt!
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(TipsPage);
