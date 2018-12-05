/**
 * @author: songshaohua
 * @Date: 2018-10-29
 * vuex 入口
 */

import Vue from 'vue'
import Vuex from 'vuex'

// 在modules文件夹里面创建文件后自动添加到store中
const modules = require.context('./modules', true, /.js$/)
let m = []
modules.keys().map(key => {
  m[key.replace(/(\.\/)|(\.js)/ig, '')] = modules(key).default
})
Vue.use(Vuex)

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
