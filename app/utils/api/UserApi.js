import Caller from './ApiCaller';

const prefix = 'users/';

export default {
    get(id) {
        return Caller(prefix + `/user/${id}`, 'GET');
    }
};