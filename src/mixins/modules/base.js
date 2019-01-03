import { mapMutations } from 'vuex'
export default {
  components: {},
  data () {
    return {}
  },
  methods: {
    ...mapMutations('global', [
      'RIGHT_DONE'
    ]),
    testMixin () {
      console.log('this is mixin test!')
    }
  },
  mounted () {
    if (this.headerRightClick) {
      this.RIGHT_DONE(this.headerRightClick)
    }
  },
  computed: {

  },
  watch: {

  }
}
