import SupportService from '@/services/support.service'

const actions = {

    getSupportsByLesson({ commit }, lessonId) {
        return SupportService.getSupportsByLesson(lessonId)
            .then(supports => commit('SET_SUPPORTS', supports))
    },

    storeSupport({ commit }, params) {
        return SupportService.storeSupport(params)
            .then(response => commit('ADD_NEW_SUPPORT', response.data))
    },

    storeReplySupport({ commit }, params) {
        return SupportService.storeReplySupport(params)
            .then(response => {
                const data = {
                    reply: response.data,
                    supportId: params.support
                }
                commit('ADD_NEW_REPLY_TO_SUPPORT', data)
            })
    },

    getMySupports({ commit }, status) {
        return SupportService.getMySupports(status)
            .then(response => commit('SET_SUPPORTS', response))
    },
}
export default actions