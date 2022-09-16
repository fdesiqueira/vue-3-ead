import AuthService from "@/services/auth.service";
import ResetPasswordService from "@/services/password.service";

export default {

    state: {
        user: {
            name: "",
            email: "",
        },
        loggedIn: false,
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.loggedIn = true;
        },

        LOGOUT(state) {
            state.user = {
                name: "",
                email: "",
            }
            state.loggedIn = false;
        }
    },

    actions: {

        auth({ state }, params) {
            state.loggedIn = false;
            return AuthService.auth(params);
        },

        getMe({ commit }) {
            commit('CHANGE_LOADING', true);

            AuthService.getMe()
                .then(response => commit('SET_USER', response.data))
                .finnaly(() => commit('CHANGE_LOADING', false))
        },

        forgetPassword({ state }, params) {
            state.loggedIn = false;
            return ResetPasswordService.forgetPassword(params);
        },
    }
}