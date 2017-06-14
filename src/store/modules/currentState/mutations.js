import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.INITIATE_MATRIX](state) {
    Vue.set(state, 'matrix', {});
    for (let row = 0; row < state.dimensions.height; row++) {
      Vue.set(state.matrix, row, {});
      for (let col = 0; col < state.dimensions.width; col++) {
        Vue.set(state.matrix[row], col, false);
      }
    }
  },
  [types.RANDOM_FILL_CELLS](state) {
    for (let row = 0; row < Object.keys(state.matrix).length; row++) {
      for (let col = 0; col < Object.keys(state.matrix[row]).length; col++) {
        if (Math.random() > 0.5) {
          Vue.set(state.matrix[row], col, true);
        }
      }
    }
  },
  [types.CHANGE_CELLS](state, payload) {
    state.matrix = payload;
  },
  [types.SET_DIMENSIONS](state, { width = 10, height = 10 }) {
    state.dimensions = { width, height };
  },
  [types.CHANGE_CELL](state, { x, y }) {
    Vue.set(state.matrix[x], y, !state.matrix[x][y]);
  },
  [types.SET_BORDERS](state) {
    const { matrix } = state;
    state.borders = {
      bottom: Math.max(...Object.keys(matrix)),
      top: Math.min(...Object.keys(matrix)),
      left: Math.min(...Object.keys(matrix[0])),
      right: Math.max(...Object.keys(matrix[0])),
    };
  },
  [types.SET_PATTERN](state, { pattern }) {
    const { matrix } = state;
    switch (pattern) {
      case 'Gosper glider gun':
        state.matrix = { ...matrix,
          1: {
            ...matrix[1],
            25: true,
          },
          2: {
            ...matrix[2],
            23: true,
            25: true,
          },
          3: {
            ...matrix[3],
            13: true,
            14: true,
            21: true,
            22: true,
            35: true,
            36: true,
          },
          5: {
            ...matrix[5],
            1: true,
            2: true,
            11: true,
            17: true,
            21: true,
            22: true,
          },
          6: {
            ...matrix[6],
            1: true,
            2: true,
            11: true,
            15: true,
            17: true,
            18: true,
            23: true,
            25: true,
          },
          7: {
            ...matrix[7],
            11: true,
            17: true,
            25: true,
          },
          4: {
            ...matrix[4],
            12: true,
            16: true,
            21: true,
            22: true,
            35: true,
            36: true,
          },
          8: {
            ...matrix[8],
            12: true,
            16: true,
          },
          9: {
            ...matrix[9],
            13: true,
            14: true,
          },
        };
        break;
      default:
        break;
    }
  },
};
