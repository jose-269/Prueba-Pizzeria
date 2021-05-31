import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/carrito",
    name: "Carrito",    
    component: () =>
      import(/* webpackChunkName: "carrito" */ "../views/Carrito.vue"),
  },
  {
    path: "/inventario",
    name: "Inventario",    
    component: () =>
      import(/* webpackChunkName: "inventario" */ "../views/Inventario.vue"),
  },
  {
    path: "/ventas",
    name: "Ventas",    
    component: () =>
      import(/* webpackChunkName: "ventas" */ "../views/Ventas.vue"),
  },
  {
    path: "/nuevas",
    name: "Nuevas",    
    component: () =>
      import(/* webpackChunkName: "nuevos" */ "../views/Nuevas.vue"),
  },
  {
    path: "*",
    name: "NotFound",    
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
