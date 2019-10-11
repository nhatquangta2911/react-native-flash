/* eslint-disable global-require */
/* eslint-disable react/sort-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import { darkPalette, headerStyle, text } from '../../styles/base';
import { tokenHandler } from '../../utils/token';
import ItemInfo from './sections/ItemInfo';

class InfoPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Your Info',
      headerRightTitle: 'Done'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      height: '',
      weight: '',
      gender: '',
      age: '',
      bodyFat: '',
      goal: '',
      activityLevel: '',
      dietType: '',
      tags: []
    };
  }

  async componentDidMount() {
    this.setState({
      name: await AsyncStorage.getItem('name'),
      image: await AsyncStorage.getItem('image'),
      height: await AsyncStorage.getItem('height'),
      weight: await AsyncStorage.getItem('weight'),
      gender: await AsyncStorage.getItem('gender'),
      age: await AsyncStorage.getItem('age'),
      bodyFat: await AsyncStorage.getItem('bodyFat'),
      goal: await AsyncStorage.getItem('goal'),
      activityLevel: await AsyncStorage.getItem('activityLevel'),
      dietType: await AsyncStorage.getItem('dietType'),
      tags: await AsyncStorage.getItem('tags')
    });
  }

  getInfo = async () => {
    const user = await tokenHandler.getData('user');
    this.setState({ data: user });
  };

  render() {
    const { infoContainer, textStyle, imageContainer } = styles;
    const {
      name,
      image,
      height,
      weight,
      gender,
      age,
      bodyFat,
      goal,
      activityLevel,
      dietType,
      tags
    } = this.state;
    const tagsResult =
      tags && tags.map(t => <Text style={textStyle}>{t}</Text>);
    return (
      <View style={infoContainer}>
        <View style={imageContainer}>
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              position: 'absolute',
              bottom: -10
            }}
          />
        </View>
        <ScrollView>
          <ItemInfo name="Name" value={name} />
          <ItemInfo name="Age" value={age} />
          <ItemInfo name="Gender" value={gender} />
          <ItemInfo name="Height" value={height} />
          <ItemInfo name="Weight" value={weight} />
          <ItemInfo name="Activity Level" value={activityLevel} />
          <ItemInfo name="bodyFat" value={bodyFat} />
        </ScrollView>
      </View>
    );
  }
}

export default InfoPage;
