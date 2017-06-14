import CellRow from '../cellRow/cellRow.vue';

export default {
  name: 'container',
  props: ['currentState', 'isPlaying', 'interval'],
  components: {
    CellRow,
  },
};
