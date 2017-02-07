import Vue from 'vue'
import Router from 'vue-router'
import Header from 'components/Header'
import Hello from 'components/Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Header',
            component: Header
        },
        {
            path:'/about',
            name: 'Hello',
            component: Hello
        }

    ]
})
