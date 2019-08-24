/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { tokenHandler } from '../../utils/token';

let asyncToken = '';

const getToken = async () => {
  asyncToken = await tokenHandler.getData('token');
};

const Child = () => {
  getToken();
  const counter = useSelector(state => state.counter);
  const { email, token } = useSelector(state => state.loginReducer);
  const { childContainer, childStyles, textStyle } = styles;
  return (
    <View style={childContainer}>
      <Text style={childStyles}>{counter}</Text>
      <Text style={textStyle}>{asyncToken}</Text>
    </View>
  );
};

export default Child;
