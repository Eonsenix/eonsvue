module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 根字体尺寸
      unitPrecision: 6, // rem保留小数位
      propList: ['*', '!transform-origin'], // 要转成rem的css属性
      minPixelValue: 2, // 转换成rem 的最小px
      selectorBlackList: ['vux']
    }
  }
}