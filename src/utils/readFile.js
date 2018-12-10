/*
  1.export default 就获取default
  2.直接输出就func(key)
  3.export xxx const = {}  就 func(key).xxx
*/
export const readFile = (func) => {
  let list = []
  func.keys().map(key => { // func.keys() 输出文件名称的数组
    let modules = func(key).default || func(key)
    // 是数组就遍历 否则直接push
    if (modules.length) {
      for (let i of modules) {
        list.push(i)
      }
    } else {
      list.push(modules)
    }
  })
  return list
}
