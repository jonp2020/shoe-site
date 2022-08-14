import { createStore } from "vuex";

export default createStore({
  state: {
    basketItems: [],
    individualShoe: [],
  },
  getters: {
    getBasketItems(state) {
      return state.basketItems;
    },
    getIndividualShoe(state) {
      return state.individualShoe;
    },
  },
  mutations: {
    addToBasket(state, shoppingItem) {
      state.basketItems.push(shoppingItem);
    },
    resetBasket(state) {
      state.basketItems = [];
    },
    addToIndividualShoe(state, item) {
      state.individualShoe.pop();
      state.individualShoe.push(item);
    },
  },
  actions: {},
  modules: {},
});
