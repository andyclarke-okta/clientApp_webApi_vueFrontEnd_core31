<template>
    <header>
            <nav class="navbar fixed-top navbar-expand-lg scrolling-navbar navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <router-link to="/" class="navbar-brand">
                    Acme Financial
                </router-link>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav flex-grow-1">
                        <router-link class="nav-item nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                        <router-link class="nav-item nav-link" to="/About">About</router-link>
                    </div>

                    <div v-if="authenticated" class="nav navbar-nav navbar-right">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <router-link class="dropdown-item" to="/messages">Messages</router-link>
                                    <router-link class="dropdown-item" to="/profile">Profile</router-link>
                                    <div class="dropdown-divider"></div>
                                    <router-link class="dropdown-item" to="/something">Something else here</router-link>
                                </div>
                            </li>
                        </ul>
                        <!--<button v-if="isLoggedIn" class="nav-item nav-link" v-on:click='logout' id='logout-button'> Logout </button>-->
                        <a href="#" class="nav-item nav-link" id='logout-button' @click="logout()">Logout</a>
                    </div>
                    <div v-else class="nav navbar-nav navbar-right">
                        <!--<button class="nav-item nav-link" v-on:click='login' id='login-button'> Login </button>-->
                        <a href="#" class="nav-item nav-link" id='login-button' @click='login()'>Login</a>
                    </div>

                </div>
            </nav>   
    </header>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'AppHeader',
        data: function () {
            return { authenticated: false }
        },
        created() { this.isAuthenticated() },
        watch: {
            // Everytime the route changes, check for auth status
            '$route': 'isAuthenticated'
        },
        methods: {
            async isAuthenticated() {
                this.authenticated = await this.$auth.isAuthenticated()
            },
            login() {
                this.$auth.loginRedirect('/')
            },
            async logout() {
                await this.$auth.logout()
                await this.isAuthenticated()
            }
        }
    };
</script>

<!--<style scoped>
    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>-->