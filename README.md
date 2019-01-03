#基于vue Cli3的 引入了各种工具的改造脚手架
npm install
npm run serve

#文件遍历
使用require.context() 再根据具体需求遍历输出想要的格式
使用到的地方: axios的apiList && 混合mixins && vuex && 路由router

#接口调用
使用axios
处理 请求和返回数据: src/common/axiosRequest/handleRequest.js
axios基础配置: src/common/axiosRequest/axios.js
请求URL存放地址: src/common/apiList/home/api.js

#使用vuex的action来调用接口
example: src/store/modules/home/index.js && src/views/Home.vue
在action中写入在apiList中的url并取一个方法名
在页面中使用mapAction来调用

#mixins
example: src/mixins/modules/base.js && src/views/Home.vue
使用方式:页面中 import mixins from '@mixins'
export default中 mixins: [mixins.base]

#路由
example: routes/modules/main/exampleRoute.js
使用懒加载的方式引用

#适配手机屏幕
使用px2rem的方式
设置页面font-size: plugins/flexible.js

#UI
有赞UI



