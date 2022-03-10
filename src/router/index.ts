import { createRouter, createWebHistory } from "vue-router";
import { useTokenExpirationTime } from "@/stores/useTokenExpirationTime";
import HomeView from "@/views/HomeView.vue";
import Login from "@/views/Login.vue";

const { isValid } = useTokenExpirationTime();
let routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
];

if (isValid) {
  routes = [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ];
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
