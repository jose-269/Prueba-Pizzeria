<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
// import firebase from "firebase";
import {  mapActions } from "vuex";
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  methods: {
    ...mapActions(["getPizzaDB"]),
  },
  created() {
    this.getPizzaDB();
  },
};
</script>
<style lang="scss"></style>
