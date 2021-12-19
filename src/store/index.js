import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    markers: [],
    mapboxToken: "pk.eyJ1IjoiZW5yaWtlMTU5IiwiYSI6ImNrdml6NWlvYWNwa3IycG56NWRzNzVvc3QifQ.POKhqV37-hGkEs4jA6dWyA",
    mapboxStyle: "mapbox://styles/enrike159/cjuwtsxus02h51fpw502l7ixq",
    token: '',
    user: {},
  },
  getters: {
    getUser: state => {
      return state.user;
    },
    getToken: state => {
      return state.token;
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    setToken: ({ commit }, { token }) => {
      commit('SET_TOKEN', token);
    },
    setUser: ({ commit }, { user }) => {
      commit('SET_USER', user);
    },
  },
  modules: {
  }
})
