import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@store/index'
// import 'lib-flexible/flexible.js'
import '@assets/scss/common.scss' // 公共样式
import './plugins/flexible.js'
import mixins from '@mixins/allmixin'
Vue.mixin(mixins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
