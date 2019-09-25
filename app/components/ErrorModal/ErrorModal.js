import React from 'react';
import { View, Button } from 'react-native';
import { Text } from '../../components';

const ErrorModal = ({ modal: { closeModal, openModal } }) => (
  <View>
    <Text.TitleText>Test Error Modal</Text.TitleText>
    <Text.CommonText>Content</Text.CommonText>
    <Button title="OK" onPress={closeModal} />
    <Button title="Open another modal!" onPress={() => openModal('NoConnection')} />
  </View>
);

export default ErrorModal;
