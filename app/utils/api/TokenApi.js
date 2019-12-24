import Caller from './ApiCaller';

const prefix = 'tokens';

export default {
  get() {
    return Caller(prefix, 'GET');
  },
  add(token) {
    return Caller(prefix, 'POST', token);
  }
};
