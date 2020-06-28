import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
import axios from "axios";
import VueAxios from "vue-plugin-axios";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueAxios, {
  axios,
  config: {
    baseURL: "API",
    useCredentails: true
  },
  interceptors: {
    beforeRequest(config) {
      const token = localStorage.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    beforeResponseError(error) {
      // const { response, message } = error
      // if (response) {
      //   alert(error.response.data.message)
      // } else if (message) {
      //   alert(message)
      // }
    }
  }
});

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
