import BaseService from '@/services/base.service';
import { TOKEN_NAME } from '@/configs';

export default class AuthService extends BaseService {

    static async auth(params) {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/auth', params)
                .then(response => {
                    localStorage.setItem(TOKEN_NAME, response.data.token)
                    resolve(response)
                })
                .catch(error => reject(error.response))
        })
    }

    static async getMe() {

        const token = await localStorage.getItem(TOKEN_NAME)

        if (!token) {
            return Promise.reject('Token not found')
        }

        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('/me')
                .catch(error => {
                    localStorage.removeItem(TOKEN_NAME)
                    reject(error.response)
                })
        })
    }

}