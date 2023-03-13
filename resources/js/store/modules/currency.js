import { getCurrencies } from "./apis";

const state = {
  currencies: [],
};

const getters = {
  getterCurrencies: (state) => state.currencies,
};

const mutations = {
  setCurrencies: (state, payload) => (state.currencies = payload),
};

const actions = {
  getCurrencies: async ({ commit }) => {
    const result = await getCurrencies();
    if (result && result.data) {
      commit("setCurrencies", result.data.data);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
