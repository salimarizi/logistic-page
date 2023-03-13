import Vue from "vue";
import Vuex from "vuex";
import uoms from "./modules/uom";
import currencies from "./modules/currency";
import charges from "./modules/charge";

Vue.use(Vuex);

//new store
export default new Vuex.Store({
  modules: {
    uoms,
    currencies,
    charges,
    // more modules
  },
});
