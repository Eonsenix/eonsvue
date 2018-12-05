/**
 * @author songshaohua
 * @Date 2018-11-08
 */

import apiList from '@common/index'
import request from '@common/axiosRequest/handleRequest'

const state = {
  sb: 'cnm'
}

const mutations = {
}

const actions = {
  getCityRewardRecords ({ commit }, data) { // 列表
    return request(apiList.getCityRewardRecords, data)
  },
  insert ({ commit }, data) { // 
    return request(apiList.insert, data)
  },
  getChatList ({ commit }, data) { // 
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
