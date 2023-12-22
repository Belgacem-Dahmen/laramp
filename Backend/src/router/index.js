import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import ForgotPassword from "../views/Auth/ForgotPassword.vue";
import Adherents from "../views/Adherents.vue";
import Demandes from "../views/Demandes.vue";
import Formations from "../views/Formations.vue";
import Exports from "../views/Exports.vue";
import notFound from "../views/notFound.vue";
import { useUserStore } from "../stores/userStore";

const routes = [
  {
    path: "/",
    name: "home",
    component: AuthLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/adherents",
        name: "Adherents",
        component: Adherents,
      },
      {
        path: "/demandes",
        name: "Demandes",
        component: Demandes,
      },
      {
        path: "/formations",
        name: "Formations",
        component: Formations,
      },
      {
        path: "/exports",
        name: "Exports",
        component: Exports,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    component: DefaultLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
      {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = useUserStore();
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !user.isLoggedIn) {
    next({ name: "Login" });
  } else if (
    (user.isLoggedIn && to.name === "Login") ||
    to.name === "Register"
  ) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
