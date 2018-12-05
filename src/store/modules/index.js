/**
 * @author songshaohua
 * @Date 2018-11-01
 */

const state = {
  isChecked: false
}

const mutations = {
  // 是否已拖拽验证
  SETDRAGCHECK (state, bol) {
    state.isChecked = bol
  }
}

const actions = {
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
