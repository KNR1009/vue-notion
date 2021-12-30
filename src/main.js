import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/main",
      component: () => import("./components/MainPage.vue"),
    },
    {
      path: "/study/binding",
      component: () => import("./components/study/BindingPage.vue"),
    },
    {
      path: "/study/direct",
      component: () => import("./components/study/DirectivePage.vue"),
    },
    {
      path: "/study/event",
      component: () => import("./components/study/EventPage.vue"),
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
