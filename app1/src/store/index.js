import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  devtools: true, // without setting this to false single-spa doesn't work
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

export default store;
