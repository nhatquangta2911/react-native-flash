import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

const Child = () => {
  const counter = useSelector(state => state.counter);
  const { childStyles } = styles;
  return (
    <View>
      <Text style={childStyles}>{counter}</Text>
    </View>
  );
};

export default Child;
