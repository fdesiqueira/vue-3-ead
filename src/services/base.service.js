import Http from '@/services/http.init';

export default class BaseService {

    construtor() {

        this.instance = new BaseService();

    }

    static request(status = { auth: false }) {

        return new Http(status);

    }
}