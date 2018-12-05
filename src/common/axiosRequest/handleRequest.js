import request from './axios'

function handleRequest (urlConfig, data, axiosConfig = {}) {
  let params = data

  let dataConfig = urlConfig.method.toLowerCase() === 'get' ? { params: params } : { data: params }

  return request({
    method: urlConfig.method,
    url: urlConfig.url,
    ...dataConfig,
    ...axiosConfig,
    headers: {
      ...axiosConfig.headers
    }
  }).then(res => {
    if (res.returnCode === '0') { // 正常返回
      return Promise.resolve(res)
    } else { // 其他错误
      return Promise.resolve(res)
      // return Promise.reject(res.errorInfo)
    }
  }).catch(err => {
    // Message.error(err || '系统异常 请稍后再试')
    return Promise.reject(err)
  })
}

export default handleRequest
