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
import { UserApi } from '../../utils/api';

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
      id: '',
      user: ''
    };
  }

  async componentDidMount() {
    await this.getInfo();
    UserApi.get(this.state.id)
         .then(res => this.setState({ user: res.data }))
         .catch(err => console.log(err));
  }

  getInfo = async () => {
    const id = await tokenHandler.getData('id');
    this.setState({ id });
  };

  render() {
    const { infoContainer, textStyle, imageContainer } = styles;
    const {
      id, user
    } = this.state;
    // const tagsResult =
    //   tags && tags.map(t => <Text style={textStyle}>{t}</Text>);
    return (
      <View style={infoContainer}>
        <View style={imageContainer}>
          <Image
            source={{ uri: user.picture }}
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
          <ItemInfo name="Name" value={user.name} />
          <ItemInfo name="Email" value={user.email} />
          <ItemInfo name="Age" value={user.age} />
          <ItemInfo name="Height" value={user && user.userInfo && user.infoUser.height} />
          <ItemInfo name="Gender" value={user && user.userInfo && user.infoUser.gender} />
          <ItemInfo name="Weight" value={user && user.userInfo && user.infoUser.weight} />
          <ItemInfo name="Activity Level" value={user && user.userInfo && user.infoUser.activityLevel} />
          <ItemInfo name="bodyFat" value={user && user.userInfo && user.infoUser.bodyFat} />
        </ScrollView>
      </View>
    );
  }
}

export default InfoPage;
