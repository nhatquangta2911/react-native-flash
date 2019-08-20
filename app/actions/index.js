import { INCREASE, DECREASE, DOUBLE_INCREASE } from './types';

export const counterIncrease = () => ({ type: INCREASE });
export const counterDecrease = () => ({ type: DECREASE });
export const counterDoubleIncrease = () => ({ type: DOUBLE_INCREASE });
