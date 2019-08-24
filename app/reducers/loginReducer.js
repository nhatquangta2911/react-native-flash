/* eslint-disable default-case */
import { LOGIN } from '../actions/types';

const initialState = {
  token: '',
  email: ''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
  }
  return state;
};

export default loginReducer;
