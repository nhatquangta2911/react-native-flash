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
    headerTitleStyle: { ...styles.headerStyle, marginLeft: -4 }
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
            Shot what able cold new the see hold. Friendly as an betrayed
            formerly he. Morning because as to society behaved moments. Put
            ladies design mrs sister was. Play on hill felt john no gate. Am
            passed figure to marked in. Prosperous middletons is ye inhabiting
            as assistance me especially. For looking two cousins regular
            amongst.
          </Text>
          <Text style={textStyles}>
            Affronting discretion as do is announcing. Now months esteem oppose
            nearer enable too six. She numerous unlocked you perceive speedily.
            Affixed offence spirits or ye of offices between. Real on shot it
            were four an as. Absolute bachelor rendered six nay you juvenile.
            Vanity entire an chatty to.
          </Text>
          <Text style={textStyles}>
            Now principles discovered off increasing how reasonably middletons
            men. Add seems out man met plate court sense. His joy she worth
            truth given. All year feet led view went sake. You agreeable
            breakfast his set perceived immediate. Stimulated man are projecting
            favourable middletons can cultivated.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(TipsPage);
