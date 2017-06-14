export default {
  name: 'cellDead',
  props: ['x', 'y'],
  methods: {
    changeCell() {
      const { x, y } = this;
      this.$store.commit('CHANGE_CELL', { x, y });
    },
  },
};
