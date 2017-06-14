export default {
  props: ['x', 'y'],
  name: 'cellAlive',
  methods: {
    changeCell() {
      const { x, y } = this;
      this.$store.commit('CHANGE_CELL', { x, y });
    },
  },
};
