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
  ActivityIndicator
} from 'react-native';
import { Snackbar } from 'react-native-paper';
import { withNavigationFocus } from 'react-navigation';
import styles from './styles';
import { Question, ModalSingle, ModalMulti, ModalDrop } from '../../components';
import { QuestionApi } from '../../utils/api';
import { makeQuestion, handleDateTime } from '../../utils/string';
import { tokenHandler } from '../../utils/token';
import { darkPalette } from '../../styles/base';

export class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      modal: '',
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
    QuestionApi.getAll(id || 1)
      .then(res => {
        console.log(res.data);
        this.setState({
          isLoading: false,
          questionList: (res.data && res.data.questions) || []
        });
      })
      .catch(err => console.log(err));
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
              onPress: () =>
                this.setState({
                  isSnackbarVisible: !this.state.isSnackbarVisible,
                  choice: 'NO'
                })
            },
            {
              text: 'Yes',
              onPress: () =>
                this.setState({
                  isSnackbarVisible: !this.state.isSnackbarVisible,
                  choice: 'YES'
                })
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
    }, 1500);
  };

  _onRefresh = async () => {
    this.setState({
      refreshing: true,
      isLoading: true,
      questionList: []
    });
    const id = await tokenHandler.getData('id');
    QuestionApi.getAll(id || 1)
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
      scroll
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
                handleDateTime.transfer(q.consumedTime)
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
        <Snackbar
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
        </Snackbar>
      </View>
    );
  }
}

export default withNavigationFocus(QuestionPage);
