require("./styles/index.css");
//require("./images/Header 01.jpg");
//require("./images/F-35-JSF-fighter-Jet_impact_1920x1080.jpg");

import Vue from 'vue'
import App from './App.vue'
import router from './router'
//no need to specify ./store/index.js since it is the default and automatically found
import store from './store'


new Vue({
    //el: '#app',
    //alternate syntax
    //router: router,
    router,
    store,
    render: h => h(App)
    //template: '<App/>',
    //components: { App }
}).$mount('#app');

//alternate method
//render: function(createElement) {
//    return createElement(App);
//}

//alternate method
//}).$mount('#app');