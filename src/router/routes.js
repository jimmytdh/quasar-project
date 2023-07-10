const routes = [
  {
    path: "/",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage.vue") },
      {
        path: "register",
        component: () => import("pages/RegistrationPage.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "patients",
        component: () => import("pages/patients/IndexPage.vue"),
        name: "patients",
      },
      {
        path: "appointments",
        component: () => import("pages/AppointmentsPage.vue"),
        name: "appointments",
      },
      {
        path: "chats",
        component: () => import("pages/ChatsPage.vue"),
        name: "chats",
      },
      {
        path: "consultations",
        component: () => import("pages/ConsultationsPage.vue"),
        name: "consultations",
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
