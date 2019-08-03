import Vue from "vue";
import Router from "vue-router";
import SignUp from "./views/SignUp.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: SignUp,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    }
  ]
});
