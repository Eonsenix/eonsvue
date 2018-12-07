export const chunkModulesLoad = (modulesContext, replaceReg = /(^\.\/)|(\.js$)/g) => {
  const chunks = modulesContext.keys().reduce((modules, key) => {
    if (modulesContext(key).default) {
      modules[key.replace(replaceReg, '')] = modulesContext(key).default
    }
    return modules
  }, {})
  return chunks
}

const modulesContext = require.context('@mixins', true, /\.js$/)

export default chunkModulesLoad(modulesContext)
