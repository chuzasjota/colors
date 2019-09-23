import Vue from "vue";
import Clipboard from "v-clipboard";
import App from "./App.vue";

import bulma from "../node_modules/bulma";

Vue.config.productionTip = false;
Vue.use(Clipboard);

new Vue({
  render: h => h(App)
}).$mount("#app");
