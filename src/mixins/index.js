const modules = require.context('@mixins/modules', true, /\.js$/)
let obj = {}
modules.keys().map(key => {
  obj[key.replace(/(\.\/)|(\.js)/ig, '')] = modules(key).default
})
export default obj
