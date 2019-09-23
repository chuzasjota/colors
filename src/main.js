import Vue from "vue";
import App from "./App.vue";

import bulma from "../node_modules/bulma";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
