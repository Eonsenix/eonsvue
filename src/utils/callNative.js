export const callNative = (methodName, paramMap, cb, flag) => {
  var isAndroid = -1 !== navigator.userAgent.toLowerCase().indexOf('android')
  //android js bridge
  !(function(undefined) {
    var NAMESPACE = 'iBoxpay'
    var API_NAMESPACE = '__JSBridge__'
    var context = (window[NAMESPACE] = {})
    var api = window[API_NAMESPACE] || null
    if (!api) {
      return
      //return alert('发生错误, 未找到 api 对象!');
    }
    context.require = function(cmd, params, callback) {
      params = params || '{}'
      var result = api.require(cmd, JSON.stringify(params))
      if (callback && result) {
        result = JSON.parse(result)
        callback(result)
      }
    }
  })()
  var callbackName = 'cb' + new Date().getTime()
  paramMap == null ? (paramMap = {}) : (paramMap = paramMap)
  paramMap['callbackName'] = callbackName
  //paramMap["myCallback"]=cb;
  var strJsonParam = JSON.stringify(paramMap)
  var jsonResp = {}
  window[callbackName] = function(strResp) {
    //alert("回调:"+JSON.stringify(strResp));
    try {
      jsonResp = typeof strResp == 'string' ? eval(strResp) : strResp
    } catch (err) {}
    cb && cb(jsonResp)
    //执行回调后，删除跟回调方法相关的资源
    if (isAndroid) {
      if (flag) {
      } else {
        delete window[callbackName]
      }
    } else {
      document.getElementById('iframe_' + callbackName).remove()
      // $('#iframe_' + callbackName).remove();
    }
  }
  if (isAndroid) {
    try {
      iBoxpay.require(methodName, paramMap, window[callbackName])
    } catch (err) {
      console.log(err)
    }
  } else {
    var src =
      'callfunction://' +
      methodName +
      '?callback=' +
      callbackName +
      '&params=' +
      strJsonParam
    var ifreame = document.createElement('iframe')
    ifreame.id = 'iframe_' + callbackName
    ifreame.src = src
    ifreame.style.display = 'none'
    document.body.appendChild(ifreame)
  }
}
