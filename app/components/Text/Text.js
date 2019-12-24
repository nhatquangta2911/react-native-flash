/* eslint-disable no-unused-vars */
import React from 'react';
import { Text as OriginalText } from 'react-native';
import styled from 'styled-components/native';
import { darkPalette } from '../../styles/base';

const CommonText = styled.Text`
  font-family: 'Nunito-ExtraLight';
  font-size: 14;
  color: #444;
`;

const SmallerText = styled(CommonText)`
  font-size: 12;
`;

const MediumText = styled(CommonText)`
  font-size: 16;
`;

const LargerText = styled(CommonText)`
  font-size: 18;
`;

const TitleText = styled(LargerText)`
  color: ${darkPalette.darkCyan};
  font-family: 'Nunito-Regular';
`;

const ColorText = styled(SmallerText)`
  color: ${props => props.color};
  font-family: ${props => (props.bold ? 'Nunito-Bold' : 'Nunito-Light')};
  font-size: ${props => (props.bold ? 30 : 16)};
`;

export default {
  CommonText,
  SmallerText,
  MediumText,
  LargerText,
  TitleText,
  ColorText
};
