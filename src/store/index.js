import { createStore } from 'vuex';
import users from './modules/users';
import courses from './modules/courses';
import supports from './modules/supports';

export default createStore({
    state: {
        loading: false,
        loadingMessage: 'Carregando...aguarde!'
    },
    getters: {},
    mutations: {
        CHANGE_LOADING(state, status, message = 'Carregando...aguarde!') {
            state.loading = status;
            state.loadingMessage = message;
        }
    },
    actions: {},
    modules: {
        users,
        courses,
        supports,
    }
});