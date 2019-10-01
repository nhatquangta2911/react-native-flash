/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { Overlay, CheckBox, Button } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import { darkPalette, fonts } from '../../styles/base';

const { modalContainer, modalTitle, modalContent, scrollContainer } = styles;

class ModalMulti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }
  render() {
    const { isMultiVisible, title, question, choices, sendStatus, goTo } = this.props;
    const { checked } = this.state;
    return (
      <Overlay
        width="90%"
        height="auto"
        isVisible={isMultiVisible}
        onBackdropPress={() => {
          sendStatus(!isMultiVisible);
          //TODO: Reset state after dismissing
          // this.setState({
          //   checked: []
          // });
        }}
        onDismiss={() => {
          sendStatus(!isMultiVisible);
          //TODO: Reset state after dismissing
          // this.setState({
          //   checked: []
          // });
        }}
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
                  //TODO: Change text style not working
                  // fontFamily="Nunito-ExtraLight"
                  // size={20}
                  checked={checked.includes(c)}
                  // checkedTitle="Shawn"
                  checkedColor={darkPalette.darkCyan}
                  onPress={() => {
                    if (checked.includes(c)) {
                      this.setState({
                        checked: checked.filter(choice => choice !== c)
                      });
                    } else {
                      checked.push(c);
                      this.setState({
                        checked
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
            onPress={() => goTo('SRecord', checked.join(', '))}
          />
        </View>
      </Overlay>
    );
  }
}

export default ModalMulti;
