/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { Overlay, CheckBox, Button } from "react-native-elements";
import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import styles from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { darkPalette, fonts } from "../../styles/base";
import { UserApi } from "../../utils/api";

const { modalContainer, modalTitle, modalContent, scrollContainer } = styles;

class ModalMulti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }
  render() {
    const {
      isMultiVisible,
      title,
      question,
      choices,
      sendStatus,
      goTo
    } = this.props;
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
                  key={c.id}
                  title={c.name}
                  //TODO: Change text style not working
                  // fontFamily="Nunito-ExtraLight"
                  // size={20}
                  checked={checked.includes(c.id)}
                  // checkedTitle="Shawn"
                  checkedColor={darkPalette.darkCyan}
                  onPress={() => {
                    if (checked.includes(c.id)) {
                      this.setState({
                        checked: checked.filter(choice => choice !== c.id)
                      });
                    } else {
                      checked.push(c.id);
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
            titleStyle={{
              fontFamily: "Nunito-Light",
              color: darkPalette.darkCyan
            }}
            buttonStyle={{ borderColor: darkPalette.darkCyan }}
            onPress={async () => {
              const id = await AsyncStorage.getItem("id");
              const answer = {
                answerContent: "Test",
                positiveId: 1,
                ingredients: checked
              };
              UserApi.submit(answer, id)
                .then(res => {
                  Alert.alert("Success.");
                  goTo("SRecord", checked.join(", "));
                })
                .catch(error =>
                  Alert.alert("Something went wrong", error.message)
                );
            }}
          />
        </View>
      </Overlay>
    );
  }
}

export default ModalMulti;
