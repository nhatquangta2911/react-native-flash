/* eslint-disable no-unused-vars */
import { Overlay, CheckBox, Button } from 'react-native-elements';
import {
  View,
  Text,
  ScrollView,
  Alert,
  BackHandler,
  ToastAndroid
} from 'react-native';
import React from 'react';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { darkPalette, fonts } from '../../styles/base';
import AsyncStorage from '@react-native-community/async-storage';
import { UserApi } from '../../utils/api';

const { modalContainer, modalTitle, modalContent, scrollContainer } = styles;

class ModalSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: ''
    };
  }
  render() {
    const {
      isSingleVisible,
      title,
      question,
      choices,
      sendStatus,
      goTo
    } = this.props;
    const { checked } = this.state;
    return (
      <Overlay
        width='90%'
        height='auto'
        isVisible={isSingleVisible}
        onBackdropPress={() => sendStatus(!isSingleVisible)}
      >
        <View style={modalContainer}>
          <Text style={modalTitle}>{question}</Text>
          {/* <Text style={modalContent}>{title}</Text> */}
          <ScrollView style={scrollContainer}>
            {choices &&
              choices.map(c => (
                <CheckBox
                  key={c.id}
                  title={c.name}
                  checked={checked === c.id}
                  checkedIcon='dot-circle-o'
                  checkedColor='gray'
                  uncheckedIcon='circle-o'
                  onPress={() => {
                    if (checked === c.id) {
                      this.setState({
                        checked: ''
                      });
                    } else {
                      this.setState({
                        checked: c.id
                      });
                    }
                  }}
                />
              ))}
          </ScrollView>
          <Button
            title='Send'
            type='outline'
            titleStyle={{
              fontFamily: 'Nunito-Light',
              color: darkPalette.darkCyan
            }}
            buttonStyle={{ borderColor: darkPalette.darkCyan }}
            //TODO: Check user don't choose anything
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
                    ? goTo('SRecord', checked)
                    : BackHandler.exitApp();
                })
                .catch(error =>
                  Alert.alert('Something went wrong.', error.message)
                );
            }}
          />
        </View>
      </Overlay>
    );
  }
}

export default withNavigation(ModalSingle);
