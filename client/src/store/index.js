import { createStore } from "vuex";

export default createStore({
  state: {
    basketItems: [],
  },
  getters: {
    getBasketItems(state) {
      return state.basketItems;
    },
  },
  mutations: {
    addToBasket(state, shoppingItem) {
      state.basketItems.push(shoppingItem);
    },
    resetBasket(state) {
      state.basketItems = [];
    },
  },
  actions: {},
  modules: {},
});
