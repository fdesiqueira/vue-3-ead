import SupportService from '@/services/support.service'

const actions = {
    getSupportsByLesson({ commit }, lessonId) {
        return SupportService.getSupportsByLesson(lessonId)
            .then(supports => commit('SET_SUPPORTS', supports))
    }
}

export default actions