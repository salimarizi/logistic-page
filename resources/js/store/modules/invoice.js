import { getInvoices } from "../../services/invoice";

const state = {
  invoices: [],
};

const getters = {
  getterInvoices: (state) => state.invoices,
};

const mutations = {
  setInvoices: (state, payload) => (state.invoices = payload),
};

const actions = {
  getInvoices: async ({ commit }) => {
    const result = await getInvoices();
    if (result && result.data) {
      commit("setInvoices", result.data.data);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
