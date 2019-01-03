<template>
  <div class="main">
    <div class="test"></div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import mixins from '@mixins'
export default {
  name: 'home',
  mixins: [mixins.base],
  components: {

  },
  data () {
    return {
      formData: {
        name: '1111',
        value: '2222'
      },
      list: []
    }
  },
  methods: {
    ...mapActions('home/index', [
      'getChatList'
    ]),
    ...mapMutations('global', [
      'RIGHT_DONE'
    ]),
    __getChatList () { // 查询列表
      this.getChatList().then(data => {
        this.list = data
      })
    },
    headerRightClick () {
      console.log(this.formData)
    }
  },
  computed: {
    ...mapState('index', {
      showHello: state => state.hello
    })
  },
  created () {
    // this.__getChatList()
  },
  mounted () {
    console.log(this.$store.state['index'].testState)
    console.log(this.showHello)
  }
}
</script>
<style lang="scss">
.main {
  .test {
    width: 100%;
    height: 30px;
  }
  .del {
    color: red;
    font-size: 13px;
    margin-left: 14px;
  }
}
</style>
