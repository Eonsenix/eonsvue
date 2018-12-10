<template>
  <div class="main">
    <x-input title="名称" v-model="formData.name" placeholder="请输入名称"></x-input>
    <x-input title="内容" v-model="formData.value" placeholder="请输入内容" mexLength="10"></x-input>
    <x-button type="primary" @click.native="__insert">primary</x-button>
    <group>
      <cell v-for="(item,index) in list" :key="index" :title="item.name" :value="item.value"></cell>
    </group>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { XInput, XButton, Group, Cell } from 'vux'
import mixins from '@mixins'
export default {
  name: 'home',
  mixins: [mixins.base],
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      formData: {
        name: '',
        value: ''
      },
      list: []
    }
  },
  methods: {
    ...mapActions('home/index', [
      'insert',
      'getChatList'
    ]),
    __insert () {
      const params = this.formData
      this.insert(params).then(data => {
        this.__getChatList()
      })
    },
    __getChatList () { // 查询列表
      this.getChatList().then(data => {
        this.list = data
      })
    }
  },
  computed: {
    ...mapState('index', {
      showHello: state => state.hello
    })
  },
  created () {
    this.__getChatList()
  },
  mounted () {
    console.log(this.$store.state['index'].testState)
    console.log(this.showHello)
    this.testMixin()
  }
}
</script>
<style lang="scss">
.test {
  width: 100px;
  height: 30px;
}
</style>
