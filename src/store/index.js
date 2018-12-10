import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 在modules文件夹里面创建文件后自动添加到store中
const modules = require.context('./modules', true, /.js$/)
let m = []
modules.keys().map(key => {
  m[key.replace(/(\.\/)|(\.js)/ig, '')] = modules(key).default // 只留下reward/index 并获取他的default
})
const store = new Vuex.Store({
  state: {
    cnmb: 'cnmb'
  },
  mutations: {},
  actions: {},
  modules: { // 输出reward/index 等模块
    ...m
  }
})

export default store
