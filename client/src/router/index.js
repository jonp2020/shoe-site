import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WomensShoes from "../views/WomensShoes.vue";
import MensShoes from "../views/MensShoes.vue";
import KidsShoes from "../views/KidsShoes.vue";
import ShoppingCart from "../views/ShoppingCart.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/womens",
    name: "womensShoes",
    component: WomensShoes,
  },
  {
    path: "/mens",
    name: "mensShoes",
    component: MensShoes,
  },
  {
    path: "/kids",
    name: "kidsShoes",
    component: KidsShoes,
  },
  {
    path: "/cart",
    name: "shoppingCart",
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
