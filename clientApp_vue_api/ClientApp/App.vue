<template>
    <div class="container">
        <AppHeader></AppHeader>
        <div>
            <router-view></router-view>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    import AppFooter from './components/AppFooter.vue';
    export default {
        name: 'App',
        components: {
            AppHeader,
            AppFooter

        }
    };
</script>
