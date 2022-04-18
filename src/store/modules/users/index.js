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

        forgetPassword({ state }, params) {
            state.loggedIn = false;
            return ResetPasswordService.forgetPassword(params);
        },
    }

}