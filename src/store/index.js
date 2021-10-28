import Vue from 'vue';
import Vuex from 'vuex';
import application from './modules/application.js';
import crypto from './modules/crypto.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    application,
    crypto,
  }
});

export default store;
