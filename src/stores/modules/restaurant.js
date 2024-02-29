import * as types from '../mutation-types'
import {getRestaurant} from '@/api/restaurant'

const state = {
  poi_info: {},
  restaurant_info: {},    //include menu
};

//getters
const getters = {
  restaurant_info: state => state.restaurant_info,
  poi_info: state => state.poi_info
};

//actions
const actions = {
  getRestaurant({commit}, restaurant_id) {
    getRestaurant({restaurant_id}).then((response) => {
      let poi_info = response.data.data;
      commit('RECORD_RESTAURANT', poi_info)
    })
  }
};

//mutations
const mutations = {
  //record retaurant info
  [types.RECORD_RESTAURANT](state, poi_info) {
    state.poi_info = {...poi_info}
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
