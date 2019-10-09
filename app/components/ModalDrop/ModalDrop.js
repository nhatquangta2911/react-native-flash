/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Overlay, CheckBox, Button } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import styles from '../ModalMulti/styles';
import { darkPalette, fonts, margin } from '../../styles/base';

const { modalContainer, modalTitle, modalContent, scrollContainer } = styles;

class ModalDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      isButtonVisible: false
    };
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ checked: selectedItems, isButtonVisible: true });
  };

  render() {
    const { isDropVisible, title, question, choices, sendStatus, goTo } = this.props;
    const { checked, isButtonVisible } = this.state;
    return (
      <Overlay
        width="90%"
        height="auto"
        isVisible={isDropVisible}
        onBackdropPress={() => {
          sendStatus(!isDropVisible);
          //TODO: Reset state after dismissing
          // this.setState({
          //   checked: []
          // });
        }}
        onDismiss={() => {
          sendStatus(!isDropVisible);
          //TODO: Reset state after dismissing
          // this.setState({
          //   checked: []
          // });
        }}
      >
        <View style={modalContainer}>
          <Text style={modalTitle}>{title}</Text>
          <Text style={modalContent}>{question}</Text>
          <ScrollView style={{ maxHeight: 500 }}>
            <MultiSelect
              items={choices}
              uniqueKey="id"
              displayKey="name"
              ref={component => {
                this.multiSelect = component;
              }}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={checked}
              selectedItemFontFamily={fonts.thin}
              selectText="Pick Items"
              searchInputPlaceholderText="Search Items..."
              searchInputStyle={{ color: darkPalette.darkGray, fontFamily: fonts.thin }}
              altFontFamily={fonts.thin}
              seletedItemTextColor={darkPalette.darkCyan}
              selectedItemFontFamily={fonts.thin}
              selectedItemIconColor={darkPalette.darkGray}
              itemTextColor={darkPalette.darkGray}
              itemFontFamily={fonts.thin}
              tagTextColor={darkPalette.darkCyan}
              tagBorderColor={darkPalette.superLightgray}
              tagRemoveIconColor={darkPalette.darkGray}
              submitButtonText="View"
            />
          </ScrollView>
          {isButtonVisible && (
            <Button
              title="Send"
              type="outline"
              titleStyle={{
                fontFamily: 'Nunito-Light',
                color: darkPalette.darkCyan
              }}
              buttonStyle={{ borderColor: darkPalette.darkCyan, marginTop: margin.md }}
              onPress={() => goTo('SRecord', checked.join(', '))}
            />
          )}
        </View>
      </Overlay>
    );
  }
}

export default ModalDrop;