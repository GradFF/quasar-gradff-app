const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "home",
        meta: { auth: true },
      },
      {
        path: "login",
        component: () => import("pages/LoginPage.vue"),
        name: "login",
        meta: { guest: true },
      },
      {
        path: "register",
        component: () => import("pages/RegisterPage.vue"),
        meta: { guest: true },
      },
      {
        path: "forgot-password",
        component: () => import("pages/ForgotPage.vue"),
        meta: { guest: true },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
