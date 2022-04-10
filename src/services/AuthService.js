import BaseService from '@/services/BaseService';

export default class AuthService extends BaseService {

    /* eslint-disable */
    static async auth(params) {
        return this.request({ auth: true }).post('/auth', params);
    }
}