import Vue from 'vue'
import App from './App.vue'
import store from '@store/index'
// import 'lib-flexible/flexible.js'
import '@assets/scss/common.scss' // 公共样式
import './plugins/flexible.js'
import mixins from '@mixins'
import router from '@routes'
import { callNative } from '@utils/callNative' // 调用原生
Vue.prototype.$callNative = callNative
import { Button, Cell, Tabbar, TabbarItem, Tab, Tabs, CellGroup, Field, RadioGroup, Radio, Uploader, icon } from 'vant'
Vue.use(Button).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(CellGroup).use(Cell).use(Field).use(RadioGroup).use(Radio).use(Uploader).use(icon)
Vue.config.productionTip = false
Vue.prototype.$vue = Vue

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
