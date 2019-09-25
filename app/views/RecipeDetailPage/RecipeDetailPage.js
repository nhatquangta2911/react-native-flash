/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { headerStyle } from '../../styles/base';

export default class RecipeDetailPage extends Component {
  static navigationOptions = {
    title: 'Recipe Detail',
    headerTitleStyle: { ...headerStyle }
  };
  render() {
    const { recipeDetailContainer, textStyles } = styles;
    return (
      <View style={recipeDetailContainer}>
        <Text style={textStyles}> Recipe Detail Page </Text>
      </View>
    );
  }
}
