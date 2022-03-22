const state = () => ({
  cart: [],
});

const mutations = {
  addCart(state, v) {
    state.cart.push(v);
  },
};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
