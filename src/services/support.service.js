import BaseService from '@/services/base.service';

export default class SupportService extends BaseService {

    static async getSupportsByLesson(lessonId) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('/supports', {
                    params: { lesson: lessonId }
                })
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }
}