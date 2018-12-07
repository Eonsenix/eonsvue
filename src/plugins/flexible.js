/* (function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    // iOS设备，分辨率超过6的按照6来
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      if (clientWidth >= 375) {
        clientWidth = 375
      }
    } else {
      if (clientWidth >= 750) {
        clientWidth = 750
      }
    }
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window) */
/* const baseSize = 32
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem()
} */
(function (doc, win) {
  var designWidth = 375  // 设计稿的宽度
  var rootFontSize = 16 // 根字体尺寸
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    // iOS设备，分辨率超过6的按照6来
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      if (clientWidth >= 375) {
        clientWidth = 375
      }
    } else {
      if (clientWidth >= 750) {
        clientWidth = 750
      }
    }
    docEl.style.fontSize = rootFontSize * (clientWidth / designWidth) + 'px'
  };
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)