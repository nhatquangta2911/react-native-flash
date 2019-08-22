/* eslint-disable no-unused-vars */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const store = createStore(reducers, {});

export default store;
