require("./bootstrap");
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faArrowRightLong,
  faTruck,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

library.add([faArrowRightLong, faTruck, faChevronDown]);

window.Vue = require("vue").default;

Vue.component("logistic-page", require("./pages/LogisticPage.vue").default);
Vue.component("font-awesome-icon", FontAwesomeIcon);

const app = new Vue({
  el: "#app",
  store,
});
