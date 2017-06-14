import Vue from 'vue';
import Vuex from 'vuex';
import currentState from './modules/currentState';
import menu from './modules/menu';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    currentState,
    menu,
  },
});
