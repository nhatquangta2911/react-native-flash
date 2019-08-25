/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import AsyncStorage from '@react-native-community/async-storage';
import { INCREASE, DECREASE, DOUBLE_INCREASE, LOGIN } from './types';

export const counterIncrease = () => ({ type: INCREASE });
export const counterDecrease = () => ({ type: DECREASE });
export const counterDoubleIncrease = () => ({ type: DOUBLE_INCREASE });
export const loginAction = (token, email) => ({
  type: LOGIN,
  payload: { token, email }
});

export const getToken = token => ({
  type: 'GET_TOKEN',
  token
});

export const saveToken = token => ({
  type: 'SAVE_TOKEN',
  token
});

export const removeToken = () => ({
  type: 'REMOVE_TOKEN'
});

export const loading = bool => ({
  type: 'LOADING',
  isLoading: bool
});

export const error = error => ({
  type: 'ERROR',
  error
});

export const getUserToken = () => dispatch => {
  AsyncStorage.getItem('userToken')
    .then(data => {
      dispatch(loading(false));
      dispatch(getToken(data));
    })
    .catch(err => {
      dispatch(loading(true));
      dispatch(error(err.message || 'ERROR'));
    });
};

export const saveUserToken = data => dispatch => {
  AsyncStorage.setItem('userToken', 'abc')
    .then(data => {
      dispatch(loading(false));
      dispatch(saveToken(data));
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(error(err.message || 'ERROR'));
    });
};

export const removeUserToken = () => dispatch =>
  AsyncStorage.removeItem('userToken')
    .then(data => {
      dispatch(loading(false));
      dispatch(removeToken(data));
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(error(err.message || 'ERROR'));
    });
