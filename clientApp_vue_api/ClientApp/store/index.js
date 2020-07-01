import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth';
//import images from './modules/images';

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        //alternate syntax
        //auth: auth
        auth
        //images
    }
});



//const state = {
//    user: {},
//    events: []
//}

//export default new Vuex.Store({
//    state,
//    mutations,
//    actions
//})