import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { tokenHandler } from '../../utils/token';

const Child = async () => {
  const counter = useSelector(state => state.counter);
  const { email, token } = useSelector(state => state.loginReducer);
  const { childStyles } = styles;
  const asyncToken = await tokenHandler.getData('token');
  console.log(asyncToken);
  return (
    <View>
      <Text>{email}</Text>
      <Text style={childStyles}>{counter}</Text>
      <Text>{token}</Text>
      <Text>{asyncToken}</Text>
    </View>
  );
};

export default Child;
