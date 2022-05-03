import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/request",
    name: "Requests",
    component: Home,
  },
  {
    path: "/kyc",
    name: "KYC",
    component: Home,
  },
  {
    path: "/reports",
    name: "Reports",
    component: Home,
  },
  {
    path: "/audit-trail",
    name: "AuditTrail",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Home,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
