/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import TagInput from 'react-native-tags-input';
import styles from './styles';
import {
  darkPalette,
  fonts,
  dimensions,
  margin,
  padding,
  sizes
} from '../../styles/base';
import { tokenHandler } from '../../utils/token';

class RegisterStep4 extends Component {
  static navigationOptions = {
    title: 'Allergies',
    headerTitleStyle: styles.headerStyle
  };

  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: ['Apple', 'Watermelon']
      }
    };
  }

  updateTagState = state => {
    this.setState({
      tags: state
    });
  };

  render() {
    const {
      registerContainer,
      textStyles,
      commonButtonStyle,
      commonNotChosenButtonStyle,
      commonButtonTextStyle,
      commonThirdButtonStyle,
      commonChosenThirdButtonTextStyle,
      commonThirdButtonTextStyle,
      contentContainer,
      commonChosenButtonStyle
    } = styles;
    return (
      <View
        style={{
          ...registerContainer,
          alignItems: 'center'
        }}
      >
        <View style={contentContainer}>
          <Text style={{ ...textStyles, textAlign: 'center' }}>
            I don't want to eat:
          </Text>
          <TagInput
            tags={this.state.tags}
            updateState={this.updateTagState}
            placeholder="Tags..."
            placeholderStyle={{ color: darkPalette.darkGreen }}
            label="Press space to add a tag"
            labelStyle={{ color: darkPalette.darkCyan, fontFamily: fonts.thin }}
            containerStyle={{
              width: dimensions.fitWidth
            }}
            inputStyle={{
              color: darkPalette.darkGray,
              fontFamily: fonts.thin,
              fontSize: fonts.sm
            }}
            inputContainerStyle={{
              backgroundColor: darkPalette.white,
              borderColor: darkPalette.superLightgray,
              borderWidth: 0.9,
              marginTop: margin.md,
              paddingHorizontal: margin.sm / 2
            }}
            tagTextStyle={{
              fontFamily: fonts.thin,
              fontSize: fonts.sm - 3,
              color: darkPalette.darkGray,
              overflow: 'hidden',
              justifyContent: 'flex-start'
            }}
            tagStyle={{
              backgroundColor: darkPalette.white,
              borderColor: darkPalette.white,
              minHeight: fonts.xl,
              flexDirection: 'row',
              marginHorizontal: margin.sm - 2,
              marginVertical: margin.smd,
              justifyContent: 'flex-start',
              paddingHorizontal: 3
            }}
            leftElement={
              <Icon
                name={'tag-multiple'}
                type={'material-community'}
                color={darkPalette.darkCyan}
                size={fonts.md}
              />
            }
            leftElementContainerStyle={{
              justifyContent: 'center',
              marginTop: margin.sm - 2,
              marginRight: 0
            }}
            keysForTag={' '}
          />
        </View>
        <Button
          type="solid"
          title="Next Step"
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
          title="Next"
          onPress={async () => {
            await tokenHandler.storeData('tags', this.state.tags.tagsArray);
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

export default RegisterStep4;
