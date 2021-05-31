<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container">
      <router-link class="navbar-brand" to="/"><em>La Maestra</em></router-link>
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Inicio</router-link>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link active ms-4" to="/inventario"
              >Inventario</router-link
            >
            <!-- <a class="nav-link" href="#">Features</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link active ms-4" to="/carrito"
              >Carrito</router-link
            >
            <!-- <a class="nav-link" href="#">Features</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link active ms-4" to="/ventas"
              >Ventas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active ms-4" to="/nuevas"
              >Nueva pizza</router-link
            >
          </li>
        </ul>
      </div>
      <p class="nav-item text-white ms-5">
        Total productos: {{ totalCarrito }}
      </p>
      <div @click="$router.push('/carrito')" class="carroIcono ms-4"></div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  computed: {
    ...mapGetters(["totalCarrito"]),
  },
};
</script>

<style lang="scss" scoped>
.carroIcono {
  width: 24px;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
  &::before {
    content: "shopping_cart";
    font-family: "Material Icons";
    font-size: 2rem;
    color: white;
  }
}
nav {
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>
