import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/Home'
import About from 'components/about/About'
import NotFound from 'components/notFound/NotFound'
import Users from 'components/users/Users'
import Person from 'components/person/Person'

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
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/users',
            name: 'Users',
            component: Users
        },
        {
            path: '/person/:id(\\d+)',
            name: 'Person',
            component: Person
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
