import { INCREASE, DECREASE, DOUBLE_INCREASE, LOGIN } from './types';

export const counterIncrease = () => ({ type: INCREASE });
export const counterDecrease = () => ({ type: DECREASE });
export const counterDoubleIncrease = () => ({ type: DOUBLE_INCREASE });
export const loginAction = (token, email) => ({
  type: LOGIN,
  payload: { token, email }
});
