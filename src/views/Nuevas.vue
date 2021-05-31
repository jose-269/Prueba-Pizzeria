<template>
  <div class="container py-5">
    <div class="row py-5">
      <div class="col-12">
        <h1 class="text-center">Nuevas Pizzas</h1>
        <form>
          <div class="mb-3">
            <label class="form-label">ID</label>
            <input type="text" class="form-control" v-model="pizza.id" />
          </div>
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="pizza.name" />
          </div>
          <div class="mb-3">
            <label class="form-label">Descripcion</label>
            <input type="text" class="form-control" v-model="pizza.desc" />
          </div>
          <div class="mb-3">
            <label class="form-label">Precio</label>
            <input type="text" class="form-control" v-model="pizza.price" />
          </div>
          <div class="mb-3">
            <label class="form-label">Imagen</label>
            <input type="text" class="form-control" v-model="pizza.img" />
          </div>
          <div class="mb-3">
            <label class="form-label">Ingredientes</label>
            <input type="text" class="form-control" />
          </div>
        </form>
        <div class="text-center">
          <button @click="nuevaPizza" type="text" class="btn btn-primary">
            Crear
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Nuevas",
  data() {
    return {
      pizza: {
        id: "",
        name: "",
        desc: "",
        price: "",
        img: "",
        ing: [],
        stock: 10,
      },
    };
  },

  methods: {
    ...mapActions(["creaPizza"]),
    nuevaPizza() {
      const pizza = this.pizza;
      if (!pizza.id || !pizza.name || !pizza.desc || !pizza.price) return;
      this.creaPizza(pizza);
      setTimeout(() => {
        location.reload();
      }, 2000);
    },
  },
};
</script>

<style></style>
