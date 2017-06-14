export default {
  name: 'playMenu',
  props: ['dimensions'],
  data() {
    return { width: '',
      height: '',
      setPlayStatus: 'Play',
      interval: '',
    };
  },
  methods: {
    randomFill() {
      this.$store.commit('RANDOM_FILL_CELLS');
    },
    setDimensions() {
      const { width, height } = this;
      this.$store.commit('SET_DIMENSIONS', { width, height });
      this.$store.commit('INITIATE_MATRIX');
      this.$store.commit('SET_BORDERS');
    },
    triggerPlay() {
      this.setPlayStatus = this.setPlayStatus === 'Play' ? 'Pause' : 'Play';
      this.$store.commit('TRIGGER_PLAY');
    },
    setInterval() {
      const { interval } = this;
      this.$store.commit('SET_INTERVAL', { interval });
    },
    setGosper() {
      this.$store.commit('SET_DIMENSIONS', { height: 20, width: 40 });
      this.$store.commit('INITIATE_MATRIX');
      this.$store.commit('SET_BORDERS');
      this.$store.commit('SET_PATTERN', { pattern: 'Gosper glider gun' });
    },
  },
};
