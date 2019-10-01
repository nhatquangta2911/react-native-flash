/* eslint-disable no-unused-vars */
import { Overlay, CheckBox, Button } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import { darkPalette, fonts } from '../../styles/base';

const { modalContainer, modalTitle, modalContent, scrollContainer } = styles;

class ModalSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: ''
    };
  }
  render() {
    const { isSingleVisible, title, question, choices, sendStatus, goTo } = this.props;
    const { checked } = this.state;
    return (
      <Overlay
        width="90%"
        height="auto"
        isVisible={isSingleVisible}
        onBackdropPress={() => sendStatus(!isSingleVisible)}
      >
        <View style={modalContainer}>
          <Text style={modalTitle}>{title}</Text>
          <Text style={modalContent}>{question}</Text>
          <ScrollView style={scrollContainer}>
            {choices &&
              choices.map(c => (
                <CheckBox
                  key={c}
                  title={c}
                  checked={checked.includes(c)}
                  checkedIcon="dot-circle-o"
                  checkedColor="gray"
                  uncheckedIcon="circle-o"
                  onPress={() => {
                    if (checked === c) {
                      this.setState({
                        checked: ''
                      });
                    } else {
                      this.setState({
                        checked: c
                      });
                    }
                  }}
                />
              ))}
          </ScrollView>
          <Button
            title="Send"
            type="outline"
            titleStyle={{ fontFamily: 'Nunito-Light', color: darkPalette.darkCyan }}
            buttonStyle={{ borderColor: darkPalette.darkCyan }}
            //TODO: Check user don't choose anything
            onPress={() => (checked ? goTo('SRecord', checked) : goTo('Question', 'empty'))}
          />
        </View>
      </Overlay>
    );
  }
}

export default ModalSingle;
