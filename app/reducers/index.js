import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import loginReducer from './loginReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  counter: counterReducer,
  token: tokenReducer,
  loginReducer
});
