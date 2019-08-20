import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const { outputTextStyles } = styles;

const TextOutput = ({ text }) => <Text style={outputTextStyles}>{text || 0}</Text>;

export default TextOutput;
