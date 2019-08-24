import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  counter: counterReducer,
  loginReducer
});
