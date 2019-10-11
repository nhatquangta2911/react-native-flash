/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CustomCarousel } from '../../components';
import styles from './styles';
import { recipes } from '../../statics/entries';
import { headerStyle } from '../../styles/base';

export class BrowsingPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Browsing Screen',
    headerTitleStyle: { ...headerStyle, marginLeft: -4 },
    headerLeft: (
      <Icon
        name={'arrow-left'}
        size={18}
        style={{ paddingLeft: 20 }}
        color="#555"
        onPress={() => navigation.pop()}
      />
    )
  });
  render() {
    const { browsingContainer, textStyles, titleStyles } = styles;
    return (
      <View style={browsingContainer}>
        <Text style={titleStyles}>Browsing basic ingredients</Text>
        <CustomCarousel items={recipes} />
        <Text style={textStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          fugiat amet nisi neque molestias quas. Quia incidunt odit sequi. Illum
          nihil iste ipsum esse id fugit praesentium nemo facere quod.
        </Text>
        <Text style={textStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          fugiat amet nisi neque molestias quas. Quia incidunt odit sequi. Illum
          nihil iste ipsum esse id fugit praesentium nemo facere quod.
        </Text>
        <Text style={textStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          fugiat amet nisi neque molestias quas. Quia incidunt odit sequi. Illum
          nihil iste ipsum esse id fugit praesentium nemo facere quod.
        </Text>
      </View>
    );
  }
}

export default BrowsingPage;
