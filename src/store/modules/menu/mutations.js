import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.TRIGGER_PLAY](state) {
    Vue.set(state, 'isPlaying', !state.isPlaying);
  },
  [types.SET_INTERVAL](state, { interval }) {
    state.interval = interval;
  },
};
