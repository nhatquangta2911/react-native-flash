/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Alert,
  RefreshControl,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import { withNavigationFocus, withNavigation } from 'react-navigation';
import styles from './styles';
import { Question, ModalSingle, ModalMulti, ModalDrop } from '../../components';
import { QuestionApi, UserApi } from '../../utils/api';
import { makeQuestion, handleDateTime } from '../../utils/string';
import { tokenHandler } from '../../utils/token';
import { darkPalette } from '../../styles/base';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      modal: '',
      isYesNo: false,
      isSingleVisible: false,
      isMultiVisible: false,
      isDropVisible: false,
      isSnackbarVisible: false,
      choice: '',
      refreshing: false,
      isLoading: true
    };
  }

  async componentDidMount() {
    const id = await tokenHandler.getData('id');
    QuestionApi.getAll(id || 1, 7)
      .then(res => {
        console.log(res.data);
        this.setState({
          isLoading: false,
          questionList: (res.data && res.data.questions) || []
        });
      })
      .catch(err => console.log(err));
    const questionData = this.props.navigation.getParam('payload', 'DEFAULT');
    this.setState({
      isYesNo: questionData.isYesNoVisible,
      isSingleVisible: questionData.isSingleVisible,
      isDropVisible: questionData.isDropVisible,
      isMultiVisible: questionData.isMultiVisible,
      modal: {
        question: questionData.question,
        title: questionData.title,
        choice: questionData.choices
      }
    });
    questionData && questionData.isYesNo
      ? Alert.alert(this.modal.title, this.modal.choices)
      : null;
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this._onRefresh();
    }
  }

  callback = modal => {
    switch (modal.type) {
      case 'Single-choice':
        this.setState({
          modal,
          isMultiVisible: this.state.isSingleVisible,
          isDropVisible: this.state.isSingleVisible,
          isSingleVisible: !this.state.isSingleVisible
        });
        break;
      case 'Multi-choice':
        this.setState({
          modal,
          isSingleVisible: this.state.isMultiVisible,
          isDropVisible: this.state.isMultiVisible,
          isMultiVisible: !this.state.isMultiVisible
        });
        break;
      case 'Yes/No':
        Alert.alert(
          modal.title,
          modal.question,
          [
            // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
            {
              text: 'No',
              onPress: () => {
                ToastAndroid.show(
                  'Thanks for taking your time answering!',
                  ToastAndroid.LONG
                );
                this.props.navigation.state.routeName === 'Home'
                  ? this.props.jumpTo('SRecord')
                  : BackHandler.exitApp();
              }
            },
            {
              text: 'Yes',
              onPress: async () => {
                try {
                  const id = await AsyncStorage.getItem('id');
                  const answer = {
                    answerContent: modal.title,
                    positiveId: 1,
                    ingredients: modal.choices[0].id
                  };
                  await UserApi.submit(answer, id);
                  ToastAndroid.show(
                    'Thanks for taking your time answering!',
                    ToastAndroid.LONG
                  );
                  this.props.navigation.state.routeName === 'Home'
                    ? this.props.jumpTo('SRecord')
                    : BackHandler.exitApp();
                } catch (error) {
                  Alert.alert('Something went wrong. Please answer again!');
                }
              }
            }
          ],
          { cancelable: true }
        );
        break;
      case 'Dropdown List':
        this.setState({
          modal,
          isSingleVisible: this.state.isDropVisible,
          isMultiVisible: this.state.isDropVisible,
          isDropVisible: !this.state.isDropVisible
        });
        break;
      default:
    }
  };

  handleBackDrop = status => {
    this.setState({
      isSingleVisible: status,
      isMultiVisible: status,
      isDropVisible: status,
      modal: ''
    });
  };

  handleAnswer = (route, choice) => {
    this.setState({
      isSnackbarVisible: true,
      isSingleVisible: false,
      isMultiVisible: false,
      isDropVisible: false,
      choice
    });
    setTimeout(() => {
      this.props.jumpTo(route);
    }, 1000);
  };

  _onRefresh = async () => {
    this.setState({
      refreshing: true,
      isLoading: true,
      questionList: []
    });
    const id = await tokenHandler.getData('id');
    QuestionApi.getAll(id || 1, 7)
      .then(res => {
        this.setState({
          refreshing: false,
          isLoading: false,
          questionList: (res.data && res.data.questions) || []
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      questionContainer,
      titleStyles,
      textStyles,
      scrollContainer,
      titleContainer,
      scroll,
      commonButtonStyle,
      commonButtonTextStyle
    } = styles;
    const {
      questionList,
      modal,
      isSingleVisible,
      isMultiVisible,
      isDropVisible,
      choice,
      refreshing,
      isLoading
    } = this.state;
    const questionResult =
      questionList &&
      questionList.map(q => {
        const imageList = q.ingredients.map(i => i.image);
        return (
          <Question
            key={q && q.id}
            type={q && q.typeQuestion.name}
            images={imageList}
            title={
              q &&
              q.ingredients &&
              q.ingredients.reduce(
                (prev, curr) =>
                  q.ingredients.indexOf(curr) === 0
                    ? prev + '' + curr.name
                    : prev + ' | ' + curr.name,
                ''
              )
            }
            question={
              q &&
              makeQuestion.generate(
                q.typeQuestion.name,
                q.amount,
                q.ingredients[0].name,
                handleDateTime.simpleTransfer(q.consumedTime)
              )
            }
            choices={(q && q.ingredients) || null}
            jumpTo={this.props.jumpTo}
            showModal={this.callback}
          />
        );
      });
    return (
      <View style={questionContainer}>
        <View style={titleContainer}>
          <Text style={titleStyles}>Thanks for browsing in :) </Text>
          <Text style={textStyles}>
            It would be great if you could answer any of these question
          </Text>
        </View>
        <View style={scrollContainer}>
          {isLoading ? (
            <ActivityIndicator size='large' color={darkPalette.darkCyan} />
          ) : (
            <ScrollView
              style={scroll}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this._onRefresh}
                />
              }
            >
              {questionResult}
            </ScrollView>
          )}
        </View>
        <ModalSingle
          isSingleVisible={isSingleVisible}
          title={modal.title}
          question={modal.question}
          choices={modal.choices}
          sendStatus={this.handleBackDrop}
          goTo={this.handleAnswer}
        />
        <ModalMulti
          isMultiVisible={isMultiVisible}
          title={modal.title}
          question={modal.question}
          choices={modal.choices}
          sendStatus={this.handleBackDrop}
          goTo={this.handleAnswer}
        />
        <ModalDrop
          isDropVisible={isDropVisible}
          title={modal.title}
          question={modal.question}
          choices={modal.choices}
          sendStatus={this.handleBackDrop}
          goTo={this.handleAnswer}
        />
        {/* <Snackbar
          visible={this.state.isSnackbarVisible}
          onDismiss={() => this.setState({ isSnackbarVisible: false })}
          duration={1500}
          action={{
            label: 'Undo',
            onPress: () => {
              this.setState({ isSnackbarVisible: false });
            }
          }}
          >
          {choice === 'empty' ? 'Choose one, buddy!' : `You chose ${choice}`}
        </Snackbar> */}
        <Button
          type='solid'
          icon={<Icon name='sync-alt' size={25} color='white' />}
          loading={isLoading}
          onPress={() => this._onRefresh()}
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
        />
      </View>
    );
  }
}

export default withNavigation(withNavigationFocus(QuestionPage));
