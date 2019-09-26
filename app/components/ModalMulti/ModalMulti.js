import { Overlay, CheckBox } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';

const { modalContainer, modalTitle, modalContent, scrollContainer } = styles;

class ModalMulti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }
  render() {
    const { isMultiVisible, title, question, choices, sendStatus, goTo } = this.props;
    return (
      <Overlay
        width="90%"
        height="auto"
        isVisible={isMultiVisible}
        onBackdropPress={() => sendStatus(!isMultiVisible)}
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
                  checked={this.state.isChecked}
                  checkedColor="gray"
                  onPress={() => goTo('SRecord', c && c)}
                />
              ))}
          </ScrollView>
        </View>
      </Overlay>
    );
  }
}

export default ModalMulti;
