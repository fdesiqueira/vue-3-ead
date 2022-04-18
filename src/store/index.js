import { createStore } from 'vuex';
import users from './modules/users';
import courses from './modules/courses';

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        users,
        courses,
    }
});