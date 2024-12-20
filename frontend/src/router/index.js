import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShoppingCart from "@/pages/ShoppingCart.vue";
import ProductDetail from "@/pages/ProductDetail.vue";
import Products from "@/pages/Products.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cart",
      name: "cart",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ShoppingCart,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/products/:productId",
      name: "product",
      component: ProductDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFound,
    },
  ],
});

export default router;
