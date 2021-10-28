//import Vue from 'vue';

const state = () => ({
  mode: 'light',
});

const getters = {
  getMode (state) {
    return state.mode;
  }
}

const mutations = {
  setMode (state, mode) {
    state.mode = mode;
  }
}

const actions = {
  setMode ({ commit }, mode) {
    commit('setMode', mode);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
