import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import InvoiceInfo from "@/pages/InvoiceInfo.vue";

Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/invoice-info",
      name: "InvoiceInfo",
      component: InvoiceInfo,
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
