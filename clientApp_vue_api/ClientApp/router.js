import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthHandler from './components/AuthHandler.vue';
import HomePage from './components/HomePage.vue';
import ProtectedPage from './components/ProtectedPage.vue';

import HomeComponent from './components/Home.vue'
import ProfileComponent from './components/Profile.vue'
import MessagesComponent from './components/Messages.vue'


// Import the Okta Vue SDK
import Auth from '@okta/okta-vue'

Vue.use(VueRouter)


Vue.use(Auth, {
    issuer: 'https://aclarke.oktapreview.com/oauth2/ausrnpvyehcwmf1hc0h7',
    client_id: '0oararwfz5MfqxfVg0h7',
    //redirect_uri: 'https://localhost:44333/implicit/callback',
    redirect_uri: 'https://localhost:44333/authorization-code/callback',
    scope: 'openid profile email groups',
    pkce: true
})


const router = new VueRouter({
    //mode: 'hash',  only interprets route to the right of the #
    //mode: history, interprets to the right of base URL, and to the left of the hash
    mode: 'history',
    //base
    base: __dirname,
    routes: [
        { path: '/', component: HomePage },
        { path: '/protected', component: ProtectedPage, meta: {requiresAuth: true } },
        //{ path: '/implicit/callback', component: Auth.handleCallback() }
        { path: '/authorization-code/callback', component: Auth.handleCallback() },
        {
            path: '/profile',
            component: ProfileComponent,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/messages',
            component: MessagesComponent,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

// Check the authentication status before router transitions
router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router