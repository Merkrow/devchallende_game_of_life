<template>
  <div id="app">
    <container
    v-if='currentState'
    :currentState='currentState'
    :isPlaying='isPlaying'
    :interval='interval'>
    </container>
    <playMenu
    :dimensions='dimensions'></playMenu>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Container from './components/container/container.vue';
import PlayMenu from './components/menu/menu.vue';

export default {
  name: 'app',
  components: {
    Container,
    PlayMenu,
  },
  computed: {
    ...mapState({
      currentState: state => state.currentState.matrix,
      isPlaying: state => state.menu.isPlaying,
      interval: state => state.menu.interval,
      dimensions: state => state.currentState.dimensions,
      borders: state => state.currentState.borders,
    }),
  },
  created() {
    this.$store.commit('INITIATE_MATRIX');
    this.$store.commit('SET_BORDERS');
  },
  methods: {
    countNeighbours(row, col) {
      let neighbours = 0;
      if (this.currentState[row - 1]) {
        // up-left
        neighbours += this.currentState[row - 1][col - 1] ? 1 : 0;
        // up
        neighbours += this.currentState[row - 1][col] ? 1 : 0;
        // up-right
        neighbours += this.currentState[row - 1][col + 1] ? 1 : 0;
      }
      if (this.currentState[row + 1]) {
        // bottom-right
        neighbours += this.currentState[row + 1][col + 1] ? 1 : 0;
        // bottom
        neighbours += this.currentState[row + 1][col] ? 1 : 0;
        // bottom-left
        neighbours += this.currentState[row + 1][col - 1] ? 1 : 0;
      }
      if (this.currentState[row]) {
        // left
        neighbours += this.currentState[row][col - 1] ? 1 : 0;
        // right
        neighbours += this.currentState[row][col + 1] ? 1 : 0;
      }
      return neighbours;
    },
    countNewState() {
      const newState = {};
      const { left, right, top, bottom } = this.borders;
      const newBorder = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      };
      let neighbours;
      for (let row = top - 1; row <= bottom + 1; row++) {
        if (row === top - 1 || row === bottom + 1 || this.currentState.hasOwnProperty(row)) {
          if (!newState[row]) {
            newState[row] = {};
          }
          for (let col = left - 1; col <= right + 1; col++) {
            neighbours = this.countNeighbours(row, col);
            newState[row][col] = this.currentState[row] && this.currentState[row][col] ?
            this.currentState[row][col] : false;
            if (neighbours < 2 || neighbours > 3) {
              newState[row][col] = false;
            } else if (neighbours === 3 && this.currentState[row] && !this.currentState[row][col]) {
              newState[row][col] = true;
            } else {
              if (row === top - 1) {
                newBorder.top++;
              }
              if (row === bottom + 1) {
                newBorder.bottom++;
              }
              if (col === left - 1) {
                newBorder.left++;
              }
              if (col === right + 1) {
                newBorder.right++;
              }
            }
          }
        }
      }
      if (newBorder.left === 0) {
        for (let row = top - 1; row <= bottom + 1; row++) {
          delete newState[row][left - 1];
        }
      }
      if (newBorder.right === 0) {
        for (let row = top - 1; row <= bottom + 1; row++) {
          delete newState[row][right + 1];
        }
      }
      if (newBorder.top === 0) {
        delete newState[top - 1];
      }
      if (newBorder.bottom === 0) {
        delete newState[bottom + 1];
      }

      return newState;
    },
  },
  beforeUpdate() {
    if (!this.isPlaying) return;
    const newState = this.countNewState();
    setTimeout(() => {
      this.$store.commit('CHANGE_CELLS', newState);
      this.$store.commit('SET_BORDERS');
    }, this.interval);
  },
};
</script>

<style>

</style>
