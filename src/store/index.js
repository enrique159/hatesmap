import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    markers: [],
    mapboxToken: "pk.eyJ1IjoiZW5yaWtlMTU5IiwiYSI6ImNrdml6NWlvYWNwa3IycG56NWRzNzVvc3QifQ.POKhqV37-hGkEs4jA6dWyA",
    mapboxStyle: "mapbox://styles/enrike159/cjuwtsxus02h51fpw502l7ixq",
    loggedIn: false,
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
    getLoggedIn: state => {
      return state.loggedIn;
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_LOGGED_IN: (state) => {
      state.loggedIn = true;
    },
    SET_LOGGED_OUT: (state) => {
      state.loggedIn = false;
    }
  },
  actions: {
    setToken: ({ commit }, { token }) => {
      commit('SET_TOKEN', token);
    },
    setUser: ({ commit }, { user }) => {
      commit('SET_USER', user);
    },
    setLoggedIn: ({ commit }) => {
      commit('SET_LOGGED_IN');
    },
    setLoggedOut: ({ commit }) => {
      commit('SET_LOGGED_OUT');
    }
  },
  modules: {
  }
})
