import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue"),
    meta: {
      title: "Rev1 | Home",
    },
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("./views/Gallery.vue"),
    meta: {
      title: "Rev1 | Gallery",
    },
  },
  {
    path: "/services",
    name: "services",
    component: () => import("./views/Services.vue"),
    meta: {
      title: "Rev1 | Services",
    },
  },
];