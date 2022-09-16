import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const state = {
     user:null
}
const getters = {
    user: (state) => { return state.user;}
}
const mutations = {
     setUser(state, user) { state.user = user;}
}
export default new Vuex.Store({
     plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
  state,getters,mutations
});