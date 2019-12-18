import Caller from '../api/ApiCaller';

const prefix = 'ingredients/';

export default {
  getAll() {
    return Caller(prefix, 'GET');
  },
  get(id) {
    return Caller(prefix + id, 'GET');
  }
};
