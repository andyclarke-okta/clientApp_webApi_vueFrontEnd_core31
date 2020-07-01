<template>
    <div>
        <center>

            <h2 class="title">Welcome to Acme Financial</h2>

            <br>
            <div class="docs-section" id="intro">
                <p>As you probably know, we have been working on a new user experience for our documentation portal. We are now releasing the first version of the portal. There are still many things that we want to build into the portal in the not-too-far-off future.</p>

            </div>
            <div v-if="authenticated">
                <!-- alternative syntax -->
                <!--  <img v-for="image in allImages" v-bind:src="image.link" />-->
                <!--<img v-for="image in allImages" :src="image.link" />-->
                <p>This is protected content of Sample Application</p>
                <p>Available only after successful authentication</p>
                <img src="/img/wall_st_1100.jpg" />
            </div>
            <div v-else>
                <h2 class="title">Please Log into Portal to Access Apps and Protected Content</h2>
                <img src="/img/bull_girl_1050.jpg" />
            </div>

            <div class="card-group">
                <div class="card">
                    <img src="/img/investments_sm.png" class="card-img-top" alt="Commercial">
                    <div class="card-body">
                        <h5 class="card-title">Commercial Investments</h5>
                        <p class="card-text">Balanced portfolios in an ever changing environment of, government regulations, tax incentives and supply chain issue present a unique challenge to today's investors. Market trends are divering from past models. We offer expert analysis from industry experts</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/img/retirement_sm.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Retirement Planning</h5>
                        <p class="card-text">Explore our financial services and retirement planning options. We have an unwavering commitment to helping you realize your full potential when it comes to planning for the future. For yourself, your family and your community.</p>

                    </div>
                </div>
                <div class="card">
                    <img src="/img/Insurance_sm.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Insurance and Annuities</h5>
                        <p class="card-text">Getting the right amount of coverage depends on a variety of factors. We understand that every situation deserves personall attention. Our commitment is to find the right financial vehicle for every scenario. </p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />

        </center>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'HomePage',
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
            }
        }
 
};
</script>

<!--<style scoped>
    .image-container {
        column-count: 3;
        column-gap: 0;
    }

    img {
        max-width: 100%;
        padding: 5px;
    }
</style>-->