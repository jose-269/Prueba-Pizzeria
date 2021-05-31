<template>
  <div class="container">
    <div class="row">
      <div class="col-12 pt-5">
        <h1 class="text-center pt-5">Inventario de productos</h1>
      </div>
    </div>
    <div class="row">
      <div class="col12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody v-if="productos && productos.length === 0">
            <tr>
              <td colspan="8" class="text-center">
                Sin productos en el Inventario
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr
              :class="{ 'bg-danger': producto.stock === 0 }"
              v-for="(producto, i) in productos"
              :key="i"
            >
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ producto.id }}</td>
              <td>{{ producto.name }}</td>
              <td>{{ producto.price }}</td>
              <td>{{ producto.stock }}</td>
              <td>
                <button @click="borrar(producto.id)" class="btn btn-danger">
                  Borrar registro
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Inventario",
  computed: {
    ...mapState(["productos"]),
  },
  methods: {
    ...mapActions(["borrarPizza"]),
    borrar(id) {
      this.borrarPizza(id);
      setTimeout(() => {
        location.reload();
      }, 2000);
    },
  },
};
</script>
