import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation-types";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

// Mutations
const mutations = {
  [types.ADD_TO_CART] (state, product) {
    const record = state.cart.find(p => p.id === product.id);
    console.log(product)

    if (!record) {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    } else {
      record.quantity++;
    }
  }
};

// initial state
const state = {
  cart: [],
  all: [
    {
      id: "cc919e21-ae5b-5e1f-d023-c40ee669520c",
      name: "COBOL 101 vintage",
      description: "Learn COBOL with this vintage programming book",
      price: 399
    },
    {
      id: "bcd755a6-9a19-94e1-0a5d-426c0303454f",
      name: "Sharp C2719 curved TV",
      description: "Watch TV like never before with the brand new curved screen technology",
      price: 1995
    },
    {
      id: "727026b7-7f2f-c5a0-ace9-cc227e686b8e",
      name: "Remmington X mechanical keyboard",
      description: "Excellent for gaming and typing, this Remmington X keyboard " + "features tactile, clicky switches for speed and accuracy",
      price: 595
    }
  ]
};

// getters
const getters = {
  allProducts: state => state.all, 
  getNumberOfProducts: state => (state.all ? state.all.length : 0),
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
  addToCart({ commit }, product) {
    console.log(product)
    commit(types.ADD_TO_CART, {
      id: product.id,
      name: product.name,
      price: product.price
    });
  }
};

// store
export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations
});
