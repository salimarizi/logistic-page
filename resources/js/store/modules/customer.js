import { getCustomers } from "../../services/customer";

const state = {
  customers: [],
};

const getters = {
  getterCustomers: (state) => state.customers,
};

const mutations = {
  setCustomers: (state, payload) => (state.customers = payload),
};

const actions = {
  getCustomers: async ({ commit }) => {
    const result = await getCustomers();
    if (result && result.data) {
      commit("setCustomers", result.data.data);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
