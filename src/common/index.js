/**
 * @author songshaohua
 * @Date 2018-10-31
 */
import { chunkCommon } from '@utils/common'

const modules = require.context('./apiList/', true, /.js$/)
let list = chunkCommon(modules) // chunkCommon() 返回一个数组

let obj = {}

for (let item of list) {
  obj = Object.assign(obj, item)
}
export default obj
