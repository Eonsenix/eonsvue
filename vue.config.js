const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
} 
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // data: `@import "./node_modules/sass-bem/_bem.scss";`
      }
    }
  },
  baseUrl: './',
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@common', resolve('src/common'))
      .set('@directive', resolve('src/directive'))
      .set('@filter', resolve('src/filter'))
      .set('@mixins', resolve('src/mixins'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@utils', resolve('src/utils'))
      .set('@views', resolve('src/views'))
  },
  devServer: {
    proxy: {
      '/eons': {
        // 登录
        target: 'http://172.30.60.229:9900', // 本地
        changeOrigin: true
      },
      '/csoms/api/mbp': {
        // 登录
        // target: 'http://172.30.22.2:8081/mbp-cp-gateway',
        target: 'http://172.30.7.89:8080/mbp-cp-gateway', // 测试接口
        changeOrigin: true,
        pathRewrite: {
          '^/csoms/api/mbp': ''
        }
      }
    },
    host: '0.0.0.0',
    port: 4397
  }
  //baseUrl: process.env.NODE_ENV === 'production' ? '/mbp-csoms' : '/'
}
