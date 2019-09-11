/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Image, Button } from 'react-native-elements';
import styles from './styles';
import { darkPalette } from '../../styles/base';

const {
  recipeContainer,
  recipeHeader,
  recipeContent,
  textStyles,
  buttonContainer,
  title,
  titleStyles
} = styles;

const Recipe = ({ name, image }) => (
  <View style={recipeContainer}>
    <View style={recipeHeader}>
      <Image
        source={{ uri: image }}
        style={{
          width: 'auto',
          height: '100%',
          borderRadius: 3,
          opacity: 0.8
        }}
      />
    </View>
    <View style={recipeContent}>
      <View style={title}>
        <Text style={titleStyles}>{name}</Text>
      </View>
      <View style={buttonContainer}>
        <Button
          title="Details"
          type="outline"
          titleStyle={textStyles}
          buttonStyle={{ paddingVertical: 4, borderColor: darkPalette.darkGray }}
        />
      </View>
    </View>
  </View>
);

export default Recipe;
