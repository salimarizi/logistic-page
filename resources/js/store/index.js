import Vue from "vue";
import Vuex from "vuex";
import uoms from "./modules/uom";
import currencies from "./modules/currency";
import charges from "./modules/charge";
import vendors from "./modules/vendor";
import invoices from "./modules/invoice";
import customers from "./modules/customer";

Vue.use(Vuex);

//new store
export default new Vuex.Store({
  modules: {
    uoms,
    currencies,
    charges,
    vendors,
    invoices,
    customers,
    // more modules
  },
});
