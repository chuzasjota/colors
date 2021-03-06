import Vue from "vue";
import Buefy from "buefy";
import Clipboard from "v-clipboard";
import "buefy/dist/buefy.css";

import App from "./App.vue";

Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.use(Clipboard);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
