import { readFile } from '@utils/readFile'
const modules = require.context('./modules', true, /\.js$/)
let list = readFile(modules)
export default list
