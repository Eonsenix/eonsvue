/**
* @param {string} file: 要搜索的文件夹目录 eg： /.routerList/ 获取routerList目录下的文件集合
* @param {boolean} isdown 是否还应该搜索它的子目录
* @param {RegExp} regular：匹配文件的正则表达式 eg：/.js$/ 获取以.js为后缀的文件
* @return 返回获取的文件list
*/

export const chunkCommon = (func) => {
  let list = []
  func.keys().map(key => { // func.keys() 输出文件名称的数组
    let modules = func(key).default || func(key) // export default就获取default 
    // 如果模块是类数组的对象 则遍历该对象
    if (modules.length) {
      Array.prototype.forEach.call(modules, (item, index) => {
        list.push(item)
      })
    } else {
      list.push(modules)
    }
  })
  return list
}
