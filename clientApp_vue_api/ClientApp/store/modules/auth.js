import qs from 'qs';
import api from '../../api/imgur';
//dont use braces when referring to a default export
//use braces when referring to a named export
//import { router } from '../../router';
import router from '../../router';


const state = {
    //token: null
    idtoken: window.localStorage.getItem('id_token'),
    authenticated: false,
    userInfo: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    isAuthenticated: (state) => {
        state.authenticated;
    }
};

//alternate syntax
//const getters = {
//    isLoggedIn: (state) => {
//        !!state.token
//    }
//};

const actions = {
    login: () => {
        //api.login();
    },
    finalizeLogin({ commit }, myIdToken) {
        //const query = qs.parse(hash.replace('#', ''));
        //commit('setToken', query.access_token);
        commit('setToken', myIdToken);
        window.localStorage.setItem('id_token', myIdToken);

        commit('setAuthentication', true);
        router.push('/');
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        commit('setAuthentication', false);
        window.localStorage.removeItem('id_token');
    },
    checkAuthentication: async ({ commit }) => {
        var authState = await this.$auth.isAuthenticated();
        commit('setAuthentication', authState);
    }
};

const mutations = {
    setToken: (state, idtoken) => {
        state.token = idtoken;
    },
    setAuthentication: (state, authState) => {
        state.authenticated = authState;
    }
};

export default {
    //alternate syntax
    //state: state,
    //getters: getters,
    state,
    getters,
    actions,
    mutations
};
