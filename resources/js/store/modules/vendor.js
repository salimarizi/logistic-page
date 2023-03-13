import { getVendors } from "../../services/vendor";

const state = {
  vendors: [],
};

const getters = {
  getterVendors: (state) => state.vendors,
};

const mutations = {
  setVendors: (state, payload) => (state.vendors = payload),
};

const actions = {
  getVendors: async ({ commit }) => {
    const result = await getVendors();
    if (result && result.data) {
      commit("setVendors", result.data.data);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
