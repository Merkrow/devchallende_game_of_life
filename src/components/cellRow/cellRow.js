import CellAlive from '../cell/cellAlive/cellAlive.vue';
import CellDead from '../cell/cellDead/cellDead.vue';

export default {
  name: 'cellRow',
  props: ['col', 'x'],
  components: {
    CellAlive,
    CellDead,
  },

};
