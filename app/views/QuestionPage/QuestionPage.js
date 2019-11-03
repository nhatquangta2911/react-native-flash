/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Text, View, ScrollView, Alert, RefreshControl } from 'react-native';
import { Snackbar } from 'react-native-paper';
import styles from './styles';
import { Question, ModalSingle, ModalMulti, ModalDrop } from '../../components';
import { questions } from '../../statics/questions';
import { QuestionApi } from '../../utils/api';
import { makeQuestion, handleDateTime } from '../../utils/string';

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
      refreshing: false
    };
  }

  componentDidMount() {
    QuestionApi.getAll()
      .then(res => {
        console.log(res.data);
        this.setState({ questionList: res.data });
      })
      .catch(err => console.log(err));
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

  _onRefresh = () => {
    this.setState({
      refreshing: true,
      questionList: []
    });
    setTimeout(() => {
      QuestionApi.getAll()
      .then(res => {
        this.setState({ 
          refreshing: false,
          questionList: res.data
        });
      })
      .catch(err => console.log(err));
    }, 500);
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
      refreshing
    } = this.state;
    const questionResult =
      questionList &&
      questionList.map(q => (
        <Question
          key={q && q.id}
          type={q && q.typeQuestion.name}
          title={q && q.ingredient.name}
          question={q && makeQuestion.generate(q.typeQuestion.name, q.amount, q.ingredient.name, handleDateTime.transfer(q.consumedTime))}
          choices={q && q.choices || null}
          jumpTo={this.props.jumpTo}
          showModal={this.callback}
        />
      ));
    return (
      <View style={questionContainer}>
        <View style={titleContainer}>
          <Text style={titleStyles}>Thanks for browsing in :) </Text>
          <Text style={textStyles}>
            It would be great if you could answer any of these question
          </Text>
        </View>
        <View style={scrollContainer}>
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

export default QuestionPage;
