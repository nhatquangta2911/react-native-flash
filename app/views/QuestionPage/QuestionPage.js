/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Snackbar } from 'react-native-paper';
import styles from './styles';
import { Question, ModalSingle, ModalMulti } from '../../components';
import { questions } from '../../statics/questions';

export class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: questions,
      modal: '',
      isSingleVisible: false,
      isMultiVisible: false,
      isDropdownVisible: false,
      isSnackbarVisible: false,
      choice: ''
    };
  }

  callback = modal => {
    if (modal.type === 'single') {
      this.setState({
        modal,
        isMultiVisible: this.state.isSingleVisible,
        isSingleVisible: !this.state.isSingleVisible
      });
    } else if (modal.type === 'multi') {
      this.setState({
        modal,
        isSingleVisible: this.state.isMultiVisible,
        isMultiVisible: !this.state.isMultiVisible
      });
    } else {
      this.setState({
        isSingleVisible: this.state.isSingleVisible,
        isMultiVisible: this.state.isMultiVisible
      });
    }
  };

  handleBackDrop = status => {
    this.setState({
      isSingleVisible: status,
      isMultiVisible: status,
      modal: ''
    });
  };

  handleAnswer = (route, choice) => {
    this.setState({
      isSnackbarVisible: true,
      isSingleVisible: false,
      isMultiVisible: false,
      choice
    });
    setTimeout(() => {
      this.props.jumpTo(route);
    }, 1500);
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
      isDropdownVisible,
      choice
    } = this.state;
    const questionResult =
      questionList &&
      questionList.map(q => (
        <Question
          key={q && q.id}
          type={q && q.type}
          question={q && q.question}
          choices={q && q.choices}
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
          <ScrollView style={scroll}>{questionResult}</ScrollView>
        </View>
        <ModalSingle
          isSingleVisible={isSingleVisible}
          title={modal.type}
          question={modal.question}
          choices={modal.choices}
          sendStatus={this.handleBackDrop}
          goTo={this.handleAnswer}
        />
        <ModalMulti
          isMultiVisible={isMultiVisible}
          title={modal.type}
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
          You chose {choice}
        </Snackbar>
      </View>
    );
  }
}

export default QuestionPage;
