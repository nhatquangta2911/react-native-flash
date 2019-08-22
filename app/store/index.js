/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
// eslint-disable-next-line import/imports-first
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, {}, composeWithDevTools(...applyMiddleware(thunk)));

export default store;
