// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'vue-material/dist/vue-material.css'
import App from './App'
import router from './router'
import Person from "./model/person.js"

var VueMaterial = require('vue-material')
Vue.use(VueMaterial)


Vue.material.registerTheme({
    default: {
        primary: 'blue',
        accent: 'pink',
        warn: 'red',
    },
    purple: {
        primary: 'purple',
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
