<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-5">
          <h1 class="text-center mt-5"><em>La Maestra</em></h1>
        </div>
        <div class="col-12 mt-5">
          <div class="cardsPizzas mb-5">
            <div class="row">
              <div
                class="col-4 mb-5"
                v-for="pizza in producosFiltrados"
                :key="pizza.name"
              >
                <div class="card h-100">
                  <img :src="pizza.img" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h3 class="card-title text-capitalize text-center">
                      <strong>Pizza {{ pizza.name }}</strong>
                    </h3>
                    <p class="card-text">
                      {{ pizza.desc }}
                    </p>
                    <ul class="list-group list-group-flush">
                      <li
                        class="list-group-item"
                        v-for="(ing, i) in pizza.ing"
                        :key="i"
                      >
                        {{ ing.name }}
                      </li>
                    </ul>
                    <hr />
                    <h4 class="text-center">Precio: ${{ pizza.price }}</h4>
                    <div class="row text-center">
                      <div class="col-12">
                        <button
                          class="btn btn-primary"
                          @click="
                            agregarPizza({
                              id: pizza.id,
                              nombre: pizza.name,
                              precio: pizza.price,
                            })
                          "
                        >
                          Agregar a Carrito
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Inicio",
  data() {
    return {
      // carrito: []
    };
  },
  computed: {
    // ...mapActions(["getData"]),
    ...mapGetters(["producosFiltrados"]),
  },

  methods: {
    ...mapMutations(["agregarPizza"]),
    // ...mapMutations(["cargarData"])
  },
};
</script>
