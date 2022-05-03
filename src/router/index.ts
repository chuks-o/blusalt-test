import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Requests",
    component: Home,
  },
  {
    path: "/",
    name: "KYC",
    component: Home,
  },
  {
    path: "/",
    name: "Reports",
    component: Home,
  },
  {
    path: "/",
    name: "AuditTrail",
    component: Home,
  },
  {
    path: "/",
    name: "Users",
    component: Home,
  },
  {
    path: "/",
    name: "Settings",
    component: Home,
  },
  {
    path: "/:(.*)",
    name: "NotFound",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
