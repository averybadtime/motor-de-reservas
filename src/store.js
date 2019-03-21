import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  user: null
}

const mutations = {
  clearUser(state) {
    state.user = null
  },
  setUser(state, user) {
    state.user = user
  }
}

export const store = new Vuex.Store({
  state,
  mutations
})