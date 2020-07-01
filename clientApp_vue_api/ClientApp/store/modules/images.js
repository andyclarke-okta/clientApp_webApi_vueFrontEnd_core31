
//dont use braces when reffering to a default export
//import qs from 'qs';
import api from '../../api/imgur';
//use braces when referring to a named export
//import { router } from '../../router';
import router  from '../../router';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

//alternate syntax
//const getters = {
//    isLoggedIn: (state) => {
//        !!state.token
//    }
//};

const actions = {
    //rootstate provides access to all vuex modules defined in app
    async fetchImages({ rootState, commit }) {
        //rootState.auth.token
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },
    async uploadImages({ rootState }, images) {
        // Get the access token
        const { token } = rootState.auth;

        // Call our API module to do the upload
        await api.uploadImages(images, token);

        // Redirect our user to HomePage component
        router.push('/');
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
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
