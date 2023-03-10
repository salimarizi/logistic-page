require("./bootstrap");

window.Vue = require("vue").default;

Vue.component(
  "logistic-page",
  require("./pages/LogisticPage.vue").default
);

const app = new Vue({
  el: "#app",
});
