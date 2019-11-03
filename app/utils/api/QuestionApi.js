import Caller from './ApiCaller';

const prefix = 'questions/';

export default {
    getAll() {
        return Caller(prefix, 'GET');
    }
}