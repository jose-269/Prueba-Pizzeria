<template>
  <div class="container">
    <div class="row">
      <div class="col-12 pt-5">
        <h1 class="text-center pt-5">Carrito de compras</h1>
      </div>
    </div>
    <div class="row">
      <div class="col12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody v-if="carrito && carrito.length === 0">
            <tr>
              <td colspan="8" class="text-center">
                Sin productos en el Carrito
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(item, i) in carrito" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ item.nombre }}</td>
              <td>{{ item.precio }}</td>
              <td>{{ item.cantidad }}</td>
              <td>{{ item.subTotal }}</td>
            </tr>
            <tr>
              <td colspan="4" class="text-end bold">Total:</td>
              <td>${{ precioCarrito }}</td>
            </tr>
            <tr>
              <td colspan="5" class="text-center">
                <button @click="comprar" class="btn btn-primary">comprar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Carrito",
  data() {
      return {
          
      }
  },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["precioCarrito"]),
  },
  methods: {
      ...mapMutations(["comprar"])
  },
};
</script>
