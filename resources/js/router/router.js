import VueRouter from "vue-router";
window.Vue = require("vue");
Vue.use(VueRouter);

import {store} from '../vuex/store'
import Main from '../components/main'

const routes = [
	{ path: '/', component: Main, name: 'main', }, 	
];

export const router = new VueRouter({
    routes,
    mode: "history"
});

