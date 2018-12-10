import { readFile } from '@utils/readFile'

const modules = require.context('./apiList/', true, /.js$/)
let list = readFile(modules) // readFile() 返回一个数组

let apiList = {}

for (let item of list) {
  apiList = Object.assign(apiList, item)
}
export default apiList
