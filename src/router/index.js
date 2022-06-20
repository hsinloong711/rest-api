import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Countries from "../views/Countries.vue";
import CountriesInfo from "../views/CountriesInfo.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/countries",
      name: "countries",
      component: Countries,
    },
    {
      path: "/countries/:id",
      name: "countriesinfo",
      component: CountriesInfo,
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu,
    },
  ],
});

export default router;
