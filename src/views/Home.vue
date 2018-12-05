<template>
  <div class="home1">
    <div style="width:370px;height:30px;"></div>
    <x-input title="名称" v-model="formData.name" placeholder="请输入名称"></x-input>
    <x-input title="内容" v-model="formData.value" placeholder="请输入内容" mexLength="10"></x-input>
    <x-button type="primary" @click.native="__insert">primary</x-button>
    <group>
      <cell v-for="(item,index) in list" :key="index" :title="item.name" :value="item.value"></cell>
    </group>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import { XInput, XButton, Group, Cell } from 'vux'
export default {
  name: 'home',
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
    ...mapActions('reward/index', [
      'insert',
      'getChatList'
    ]),
    __insert () { // 
      const params = this.formData
      this.insert(params).then(data => {
        // this.result = data.result
        this.__getChatList()
      })
    },
    __getChatList () { // 
      this.getChatList().then(data => {
        this.list = data
      })
    }
  },
  created () {
    this.__getChatList()
  },
  mounted () {
    // console.log(this.$store.state['index'].isChecked)
    // console.log(this.$store.state.cnmb)
  }
}
</script>
<style lang="scss" scoped>
.test {
  border: 1px solid #000;
}
</style>
