import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { db } from "../../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    carrito: [],
    ventas: [],
    apiData: [],
  },
  getters: {
    totalCarrito(state) {
      return state.carrito.length;
    },
    producosFiltrados(state) {
      const products = state.productos;
      const filtrado = products.filter((pizza) => pizza.stock > 0);
      return !filtrado ? [] : filtrado;
    },
    precioCarrito(state) {
      const carrito = state.carrito;
      if (carrito.length === 0) return 0;
      const total = carrito.reduce((el, acc) => el + acc.subTotal, 0);
      return total;
    },
  },
  mutations: {
    cargarData(state, payload) {
      let api = state.apiData;
      api = payload;
      try {
        api.forEach(async (obj) => {
          await db.collection("pizzas").add(obj);
        });
      } catch (error) {
        console.log(error);
      }
    },

    agregarPizza(state, payload) {
      const id = payload.id;
      const nombre = payload.nombre;
      const precio = payload.precio;
      const cantidad = 1;
      const subTotal = cantidad * precio;
      // console.log(payload);
      const finder = state.carrito.find((el) => el.id === id);

      if (!finder) {
        const obj = {
          id,
          cantidad,
          nombre,
          precio,
          subTotal,
        };
        state.carrito.push(obj);
      } else {
        finder.cantidad = cantidad + finder.cantidad;
        finder.subTotal = finder.cantidad * precio;
        // if(finder.cantidad > cantidad) return finder.cantidad = 10;
      }
    },
    comprar(state) {
      const respuesta = confirm("Quieres comprar?");
      if (respuesta) {
        const venta = state.carrito.map((obj) => {
          const objDos = {
            id: obj.id,
            nombre: obj.nombre,
            precio: obj.precio,
            subTotal: obj.subTotal,
            cantidadVendida: obj.cantidad,
          };
          return objDos;
        });
        // state.ventas = venta;

        console.log(venta);
        state.productos.forEach((producto) => {
          const id = producto.id;
          state.carrito.map((el) => {
            if (el.id === id) {
              producto.stock = producto.stock - el.cantidad;
              if (el.cantidad > producto.stock) return (producto.stock = 0);
            }
          });
        });
        venta.forEach((obj) => {
          // const vendido = obj;
          const finder = state.ventas.find((el) => obj.id === el.id);
          if (!finder) {
            state.ventas.push(obj);
          } else {
            state.ventas = state.ventas.map((added) => {
              const objTres = {
                id: added.id,
                nombre: added.nombre,
                precio: obj.precio,
                subTotal:
                  added.id === obj.id
                    ? obj.subTotal + added.subTotal
                    : obj.subTotal,
                cantidadVendida:
                  added.id === obj.id
                    ? obj.cantidadVendida + added.cantidadVendida
                    : obj.cantidadVendida,
              };
              return objTres;
            });
          }
        });
        state.carrito = [];
      }
    },
    getFireDB(state, payload) {
      state.productos = payload;
    },
    agregarNueva(state, payload) {
      const existe = state.productos.find((el) => el.id === payload.id);
      if (!existe) state.productos.push(payload);
    },
  },
  actions: {
    async getData({ commit }) {
      const url =
        "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria";
      try {
        const req = await axios(url);
        const pizzas = req.data;
        const pizzasStock = pizzas.map((obj) => {
          obj.stock = 10;
          return obj;
        });
        commit("cargarData", pizzasStock);
      } catch (error) {
        console.log(error);
      }
    },
    //LLenar arreglo productos
    async getPizzaDB({ commit }) {
      const req = await db.collection("pizzas").get();
      let arr = [];
      try {
        req.docs.forEach((obj) => {
          arr.push(obj.data());
        });
        console.log(arr);
        commit("getFireDB", arr);
      } catch (error) {
        console.log(error);
      }
    },
    async creaPizza({ commit }, payload) {
      const nuevaPizza = payload;
      if (!nuevaPizza) return;
      //Actualizar state
      commit("agregarNueva", nuevaPizza);
      //Actualizar firebase
      try {
        const req = await db.collection("pizzas").get();
        req.docs.forEach(async (obj) => {
          const pizzaFire = obj.data();
          const idFire = pizzaFire.id;
          if (idFire === nuevaPizza.id) return;
        });
        await db.collection("pizzas").add(nuevaPizza);
        // location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    async borrarPizza({ commit }, payload) {
      const req = await db.collection("pizzas").where("id", "==", payload).get();
      // const ID = payload;
      commit("");
      try {
        req.docs.forEach(async (obj) => {
          obj.ref.delete();
          // console.log(obj.data());
          // const firePizza = obj.data();
          // const IdPizza = firePizza.id;
          // if(ID != IdPizza) return;
        });
        // location.reload();
        // await db.collection("pizzas").ref.delete();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
