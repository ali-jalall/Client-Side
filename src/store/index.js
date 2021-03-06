import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as types from "./mutation-types";
import layout from './layout';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";

const getDefaultState = () => {
  return  {
    cart: []
  }
}

// Mutations
const mutations = {
  [types.ADD_TO_CART] (state, { _id, name, price }) {
    const record = state.cart.find(p => p._id === _id);
    if (!record) {
      state.cart.push({
        _id,
        name,
        price,
        quantity: 1
      });
    } else {
      record.quantity++;
    }
  },
  [types.RESET_STATE] (state) {
    Object.assign(state, getDefaultState())
  },
  [types.REMOVE_ITEM_FROM_CART] (state, id) {
    state.cart = state.cart.filter(p => p._id !== id)
  }
};

// initial state
const state = getDefaultState()

// getters
const getters = {
  getNumberOfCartProducts: state => (state.cart ? state.cart.length : 0),
  cartProducts: state => {
    return state.cart.map(({ _id, name, price, quantity }) => {
      // const product = state.all.find(p => p.id === id);
      return {
        _id,
        name,
        price,
        quantity
      };
    });
  }
};

// actions
const actions = {
  addToCart({ commit }, { _id, name, price }) {
    commit(types.ADD_TO_CART, { _id, name, price });
  },
  resetState({ commit }) {
    commit(types.RESET_STATE)
  },
  removeProduct({ commit }, id) {
    commit(types.REMOVE_ITEM_FROM_CART, id)
  }
};

// store
export default new Vuex.Store({
  modules: {
    layout,
  },
  plugins: [createPersistedState()],
  state,
  strict: false,
  getters,
  actions,
  mutations
});
