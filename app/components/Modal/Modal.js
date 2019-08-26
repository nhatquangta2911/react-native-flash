import { Overlay } from 'react-native-elements';
import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const { modalContainer, modalTitle, modalContent } = styles;

const Modal = ({ isVisible, title, content, sendStatus }) => (
  <Overlay
    width="90%"
    height="auto"
    isVisible={isVisible}
    onBackdropPress={() => sendStatus(!isVisible)}
  >
    <View style={modalContainer}>
      <Text style={modalTitle}>{title}</Text>
      <Text style={modalContent}>{content}</Text>
    </View>
  </Overlay>
);

export default Modal;
