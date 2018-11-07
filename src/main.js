import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        component: Login
    }]
})

new Vue({
    el: '#app',
    components: {
        App: App
    },
    router,
    template: `<App></App>`
})