import { createStore } from 'vuex';
import customLogin from '../logic/customLogin';

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      user: null,
    };
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
      state.user = payload.user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const user = await customLogin.authenticate(credentials);
      commit('SET_AUTH', { isAuthenticated: true, user });
    },
    logout({ commit }) {
      commit('SET_AUTH', { isAuthenticated: false, user: null });
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
  },
});

export default store;