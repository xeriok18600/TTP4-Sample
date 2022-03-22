import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/session1",
    name: "Session1",
    component: () => import("../views/Session1/index.vue"),
  },
  {
    path: "/session2",
    name: "Session2",
    component: () => import("../views/Session2/index.vue"),
  },
  {
    path: "/session3",
    name: "Session3",
    component: () => import("../views/Session3/index.vue"),
    children: [
      {
        path: "user/:acc",
        component: () => import("../views/Session3/User/index.vue"),
        name: "User",
      },
    ],
  },
  {
    path: "/session4",
    name: "Session4",
    component: () => import("../views/Session4/index.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
