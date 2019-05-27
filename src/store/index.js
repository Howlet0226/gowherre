import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 由于有些浏览器不能够使用localstorage，所以这里要使用兼容处理
// 利用try和catch来处理错误
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity ({ commit }, city) {
      commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
