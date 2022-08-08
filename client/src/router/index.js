import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WomensShoes from "../views/WomensShoes.vue";
import MensShoes from "../views/MensShoes.vue";
import KidsShoes from "../views/KidsShoes.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import IndividualShoeCard from "../components/IndividualShoeCard.vue";
import PageNotFound from "../components/PageNotFound.vue";

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
    path: "/:slug",
    name: "individualShoeCard",
    component: IndividualShoeCard,
    props: true,
  },
  {
    path: "/cart",
    name: "shoppingCart",
    component: ShoppingCart,
  },
  {
    path: "/:catchAll(.*)*",
    name: "notFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
