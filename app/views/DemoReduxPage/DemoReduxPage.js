/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { Child, Button, Header } from '../../components';
import { buttonColors } from '../../styles/buttons';
import * as actions from '../../actions';
import { tokenHandler } from '../../utils/token';
import { darkPalette } from '../../styles/base';

let asyncToken = '';

const getToken = async () => {
  asyncToken = await tokenHandler.getData('token');
};

const DemoReduxPage = () => {
  getToken();
  const dispatch = useDispatch();
  const { containerStyles, textOutputStyles, buttonGroupStyles, tokenText } = styles;
  return (
    <Fragment>
      <Header centerTitle="Demo Redux" color={darkPalette.darkOrange} />
      <View style={containerStyles}>
        <View style={textOutputStyles}>
          {/* <Text style={tokenText}> Demo Redux</Text> */}
          <Child />
        </View>
        <View style={buttonGroupStyles}>
          <Button
            title="Increase"
            iconName="plus"
            backgroundColor={buttonColors.info}
            onPress={() => dispatch(actions.counterIncrease())}
          />
          <Button
            title="Double Increase"
            iconName="plus"
            doubleIcon="true"
            backgroundColor={buttonColors.info}
            onPress={() => dispatch(actions.counterDoubleIncrease())}
          />
          <Button
            title="Decrease"
            iconName="minus"
            backgroundColor={buttonColors.warning}
            onPress={() => dispatch(actions.counterDecrease())}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default DemoReduxPage;
