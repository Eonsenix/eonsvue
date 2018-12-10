import apiList from '@common/index'
import request from '@common/axiosRequest/handleRequest'

const state = {
}

const mutations = {
}

const actions = {
  insert ({ commit }, data) {
    return request(apiList.insert, data)
  },
  getChatList ({ commit }, data) {
    return request(apiList.getChatList, data)
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
