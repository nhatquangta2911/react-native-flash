/* eslint-disable default-case */
import { LOGIN } from '../actions/types';

const initialState = {
  email: '',
  password: ''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        email: action.email,
        password: action.password
      });
  }
  return state;
};

export default loginReducer;
