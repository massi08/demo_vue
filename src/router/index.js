import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/Home'
import About from 'components/about/About'
import NotFound from 'components/notFound/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path:'/about',
            name: 'About',
            component: About
        },
        {
            path:'*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
