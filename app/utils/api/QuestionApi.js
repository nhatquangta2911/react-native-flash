import Caller from './ApiCaller';

const prefix = 'questions/';

export default {
  getAll(id, size) {
    // return Caller(`${prefix}${id}`, "GET");
    return Caller(`${prefix}daily/${id}/${size}`, 'GET');
  }
};
