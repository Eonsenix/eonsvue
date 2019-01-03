var callNative = (function () {
  if (!window) return
  var userAgent = navigator.userAgent.toLowerCase()
  var isAndroid = userAgent.indexOf('android') !== -1
  // var isIBOXWebview = userAgent.indexOf('iboxpay') !== -1
  var isIBOXWebview = true
  var NAMESPACE = 'iBoxpay'
  var API_NAMESPACE = '__JSBridge__'
  var context = window[NAMESPACE] = {}
  var api = window[API_NAMESPACE] || null

  if (!isIBOXWebview) {
    return function () {
      return Promise.reject(new Error('不在webview中'))
    }
  } else {
    // 生成一个唯一的回调函数到全局给native调用
    window.generateCb = function () {
      var isAndroid = userAgent.indexOf('android') !== -1
      var callbackName = (function () {
        var cb = 'cb' +
        (Math.random() * 10000000).toString(16).substr(0, 4) +
        (new Date()).getTime() +
        +Math.random().toString().substr(2, 5)
        return cb
      })()
      var iframeId = 'iframe_' + callbackName // ios通过生成iframe的方式
      var _resolve
      var _reject
      var promise = new Promise(function (resolve, reject) {
        _resolve = resolve
        _reject = reject
      })
      window[callbackName] = function (res) {
        var eval2 = eval
        var _res = typeof res === 'string' ? eval2(res) : res
        if (res.status === 1) {
          _resolve(_res.data || {})
        } else {
          _reject(_res)
        }
        if (isAndroid) {
          delete window[callbackName]
        } else {
          document.getElementById(iframeId).remove()
        }
      }
      return {
        callbackName: callbackName,
        promise: promise,
        iframeId: iframeId
      }
    }
    if (isAndroid) {
      return function (methodName, params) {
        var result = window.generateCb()
        var promise = result.promise
        var callbackName = result.callbackName
        params = params || {}
        params['callbackName'] = callbackName
        // 将native的方法代理到iBoxpay这个全局对象
        context.require = function () {
          // 这里调用native注册在全局的方法
          try {
            api.require(methodName, JSON.stringify(params))
          } catch (e) {
            throw new Error(methodName + '方法未找到')
          }
        }
        try {
          context.require()
        } catch (err) {
          return Promise.reject(err)
        }
        return promise
      }
    } else {
      return function (methodName, params) {
        var result = window.generateCb()
        var promise = result.promise
        var callbackName = result.callbackName
        var iframeId = result.iframeId
        params = params || {}
        params['callbackName'] = callbackName
        var _iframe = document.createElement('iframe')
        var jsonParams = JSON.stringify(params)
        var src = 'callfunction://' + methodName + '?callback=' + callbackName + '&params=' + encodeURIComponent(jsonParams)

        _iframe.id = iframeId
        _iframe.src = src
        _iframe.style.display = 'none'

        document.body.appendChild(_iframe)
        return promise
      }
    }
  }
})()

export default callNative
