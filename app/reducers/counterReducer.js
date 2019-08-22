import { INCREASE, DECREASE, DOUBLE_INCREASE } from '../actions/types';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case DOUBLE_INCREASE:
      return state + 2;
    default:
      return state;
  }
};

export default counterReducer;
