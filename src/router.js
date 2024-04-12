  import { createRouter, createWebHistory } from "vue-router";
  import LoginForm from "./components/LoginForm.vue";
  import ShoppingReceipt from "./components/ShoppingReceipt.vue";
  import BookList from "./components/BookList.vue";
  import authService from "./services/authService";
  const routes = [
    {
      path: "/",
      name: "Login",
      component: LoginForm,
    },
    {
      path: "/shop",
      name: "shop",
      component: BookList,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: ShoppingReceipt,
      props: true,
      meta: { requiresAuth: true },
    },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  // before each route to check if user is authenticated
  router.beforeEach((to, from, next) => {
    // it will look if some component have requiresAuth
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      // check if user is authenticated
      if (!authService.isAuthenticated()) {
        // if not, redirect to login
        next({ name: "Login" });
      } else {
        // if yes, continue
        next();
      }
    } else {
      // if no requiresAuth, continue
      next();
    }
  });

  export default router;
