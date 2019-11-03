import Caller from './ApiCaller';

const prefix = 'users/';

export default {
    register(user) {
        return Caller(prefix + 'register', 'POST', user);
    }
};