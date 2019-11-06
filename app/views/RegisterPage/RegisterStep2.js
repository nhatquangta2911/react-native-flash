/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import styles from "./styles";
import { tokenHandler } from "../../utils/token";

class RegisterStep2 extends Component {
  static navigationOptions = {
    title: "Activity Level",
    headerTitleStyle: styles.headerStyle
  };

  constructor(props) {
    super(props);
    this.state = {
      activityLevel: null
    };
  }

  render() {
    const {
      registerContainer,
      textStyles,
      commonButtonStyle,
      commonNotChosenButtonStyle,
      commonButtonTextStyle,
      commonThirdButtonStyle,
      commonChosenThirdButtonTextStyle,
      commonThirdButtonTextStyle,
      contentContainer,
      commonChosenButtonStyle
    } = styles;
    const { navigation } = this.props;
    return (
      <View style={registerContainer}>
        <Text style={{ ...textStyles, textAlign: "center" }}>
          How active are you?
        </Text>
        <View style={contentContainer}>
          <Button
            type="outline"
            title="Sedentary"
            buttonStyle={
              this.state.activityLevel === "1"
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.activityLevel === "1"
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ activityLevel: "1" })}
          />
          <Button
            type="outline"
            title="Lightly Active"
            buttonStyle={
              this.state.activityLevel === "2"
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.activityLevel === "2"
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ activityLevel: "2" })}
          />
          <Button
            type="outline"
            title="Moderately Active"
            buttonStyle={
              this.state.activityLevel === "3"
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.activityLevel === "3"
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ activityLevel: "3" })}
          />
          <Button
            type="outline"
            title="Very Active"
            buttonStyle={
              this.state.activityLevel === "4"
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.activityLevel === "4"
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ activityLevel: "4" })}
          />
          <Button
            type="outline"
            title="Extremely Active"
            buttonStyle={
              this.state.activityLevel === "5"
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.activityLevel === "5"
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ activityLevel: "5" })}
          />
        </View>
        <Button
          type="solid"
          title="Next Step"
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
          title="Next"
          onPress={async () => {
            this.props.navigation.navigate("RegisterStep3", {
              activityLevel: this.state.activityLevel,
              goal: navigation.getParam("goal", null),
              register1: navigation.getParam("register1", null)
            });
          }}
        />
      </View>
    );
  }
}

export default RegisterStep2;
