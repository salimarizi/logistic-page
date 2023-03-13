import { getCharges } from "./apis";

const state = {
  charges: [],
};

const getters = {
  getterCharges: (state) => state.charges,
};

const mutations = {
  setCharges: (state, payload) => (state.charges = payload),
};

const actions = {
  getCharges: async ({ commit }) => {
    const result = await getCharges();
    if (result && result.data) {
      commit("setCharges", result.data.data);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
