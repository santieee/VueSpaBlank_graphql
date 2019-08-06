import Vue from 'vue';
import Vuex from 'vuex';

import errors from './modules/errors'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        errors,
    }
}); 