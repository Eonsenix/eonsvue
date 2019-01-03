<template>
  <div class="main">
    <div class="test"></div>
    <group>
      <cell title="星球秀场">是骗局吗</cell>
    </group>
    <x-button type="primary" @click.native="__insert" style="margin-top:20px;">是的</x-button>
  </div>
</template>

<script>
import { mapActions, mapState, Confirm } from 'vuex'
import { XInput, XButton, Group, Cell } from 'vux'
import mixins from '@mixins'
export default {
  name: 'home',
  mixins: [mixins.base],
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    Confirm
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
    __insert () {
      alert('是的!')
    }
  },
  computed: {
    ...mapState('index', {
      showHello: state => state.hello
    })
  },
  created () {
    /* ^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)+$
      单词字符包含 下划线 所以不能用\w
      以数字或者字符开头 + 数字字符下划线 横岗 点 (任意数量) + @ + 至少一个 数字字符
    */

  },
  mounted () {

  }
}
</script>
<style lang="scss">
.main {
  .test {
    width: 100%;
    height: 30px;
  }
}
</style>
