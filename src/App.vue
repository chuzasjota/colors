<template>
  <div id="app">
    <h1 class="title">Colores</h1>
    <div class="column is-one-quarter" v-for="color in colors" :key="color.id">
      <h2 class="title">{{color.name}}</h2>
    </div>
  </div>
</template>

<script>
//librerias
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      colors: []
    };
  },
  created: async function() {
    let result = axios
      .get("https://reqres.in/api/colors")
      .then(res => {
        this.colors = res.data.data;
        console.log(this.colors)
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
