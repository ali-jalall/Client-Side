import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as types from "./mutation-types";


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

// Mutations
const mutations = {
  [types.ADD_TO_CART] (state, { id, name, price }) {
    const record = state.cart.find(p => p.id === id);
    if (!record) {
      state.cart.push({
        id,
        name,
        price,
        quantity: 1
      });
    } else {
      record.quantity++;
    }
  }
};

// initial state
const state = {
  cart: []
};

// getters
const getters = {
  getNumberOfCartProducts: state => (state.cart ? state.cart.length : 0),
  cartProducts: state => {
    return state.cart.map(({ name, price, quantity }) => {
      // const product = state.all.find(p => p.id === id);
      return {
        name,
        price,
        quantity
      };
    });
  }
};

// actions
const actions = {
  addToCart({ commit }, { id, name, price }) {
    commit(types.ADD_TO_CART, { id, name, price });
  }
};

// store
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  strict: debug,
  getters,
  actions,
  mutations
});
