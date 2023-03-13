import { getUOMS } from "../../services/uom";

const state = {
  uoms: [],
};

const getters = {
  getterUOMS: (state) => state.uoms,
};

const mutations = {
  setUOMS: (state, payload) => (state.uoms = payload),
};

const actions = {
  getUOMS: async ({ commit }) => {
    const result = await getUOMS();
    if (result && result.data) {
      commit("setUOMS", result.data.data);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
