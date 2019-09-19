/* eslint-disable no-unused-vars */
import React from 'react';
import { Text as OriginalText } from 'react-native';
import styled from 'styled-components/native';
import { darkPalette } from '../../styles/base';

export const CommonText = styled.Text`
  font-family: 'Nunito-ExtraLight';
  font-size: 14;
  color: #444;
`;

export const SmallerText = styled(CommonText)`
  font-size: 12;
`;

export const MediumText = styled(CommonText)`
  font-size: 16;
`;

export const LargerText = styled(CommonText)`
  font-size: 18;
`;

export const TitleText = styled(LargerText)`
  color: ${darkPalette.darkCyan};
`;
