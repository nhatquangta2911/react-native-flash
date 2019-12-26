/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Overlay, CheckBox, Button } from 'react-native-elements';
import {
  View,
  Text,
  ScrollView,
  Alert,
  BackHandler,
  ToastAndroid
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { withNavigation } from 'react-navigation';
import styles from '../ModalMulti/styles';
import { darkPalette, fonts, margin } from '../../styles/base';
import { UserApi } from '../../utils/api';
import AsyncStorage from '@react-native-community/async-storage';

const { modalContainer, modalTitle, modalContent, scrollContainer } = styles;

class ModalDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      isButtonVisible: false
    };
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ checked: selectedItems, isButtonVisible: true });
  };

  render() {
    const {
      isDropVisible,
      title,
      question,
      choices,
      sendStatus,
      goTo
    } = this.props;
    const { checked, isButtonVisible } = this.state;
    return (
      <Overlay
        width='90%'
        height='auto'
        isVisible={isDropVisible}
        onBackdropPress={() => {
          sendStatus(!isDropVisible);
          //TODO: Reset state after dismissing
          // this.setState({
          //   checked: []
          // });
        }}
        onDismiss={() => {
          sendStatus(!isDropVisible);
          //TODO: Reset state after dismissing
          // this.setState({
          //   checked: []
          // });
        }}
      >
        <View style={modalContainer}>
          <Text style={modalTitle}>{question}</Text>
          {/* <Text style={modalContent}>{title}</Text> */}
          <ScrollView style={{ maxHeight: 500 }}>
            <MultiSelect
              items={choices}
              uniqueKey='id'
              displayKey='name'
              ref={component => {
                this.multiSelect = component;
              }}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={checked}
              selectedItemFontFamily={fonts.thin}
              selectText='Pick Items'
              searchInputPlaceholderText='Search Items...'
              searchInputStyle={{
                color: darkPalette.darkGray,
                fontFamily: fonts.thin
              }}
              altFontFamily={fonts.thin}
              seletedItemTextColor={darkPalette.darkCyan}
              selectedItemFontFamily={fonts.thin}
              selectedItemIconColor={darkPalette.darkGray}
              itemTextColor={darkPalette.darkGray}
              itemFontFamily={fonts.thin}
              tagTextColor={darkPalette.darkCyan}
              tagBorderColor={darkPalette.superLightgray}
              tagRemoveIconColor={darkPalette.darkGray}
              submitButtonText='View'
            />
          </ScrollView>
          {isButtonVisible && (
            <Button
              title='Send'
              type='outline'
              titleStyle={{
                fontFamily: 'Nunito-Light',
                color: darkPalette.darkCyan
              }}
              buttonStyle={{
                borderColor: darkPalette.darkCyan,
                marginTop: margin.md
              }}
              onPress={async () => {
                const id = await AsyncStorage.getItem('id');
                const answer = {
                  answerContent: 'Test',
                  positiveId: 1,
                  ingredients: checked
                };
                UserApi.submit(answer, id)
                  .then(res => {
                    ToastAndroid.show(
                      'Thanks for taking your time answering!',
                      ToastAndroid.LONG
                    );
                    this.props.navigation.state.routeName === 'Home'
                      ? goTo('SRecord', checked.join(', '))
                      : BackHandler.exitApp();
                  })
                  .catch(error => Alert.alert('Something went wrong.'));
              }}
            />
          )}
        </View>
      </Overlay>
    );
  }
}

export default withNavigation(ModalDrop);
