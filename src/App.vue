<template>
  <div id="app">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Colores</h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns is-desktop is-tablet is-mobile is-multiline is-centered">
        <color v-for="color in colors" :key="color.id" v-bind:color="color"/>
      </div>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous" v-on:click="changePage( page - 1 )">Anterior</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current">{{page}}</a>
          </li>
        </ul>
        <a class="pagination-next" v-on:click="changePage( page + 1 )">Siguiente</a>
      </nav>
    </div>
  </div>
</template>

<script>
//librerias
import axios from "axios";
//Componentes
import Color from "./components/Color";

export default {
  name: "App",
  components: {
    Color
  },
  data() {
    return {
      colors: [],
      page: 1,
      pages: 1
    };
  },
  created() {
    this.fetch()
  },
  methods:{
    fetch(){
      const params = {
        page: this.page
      }
      let result = axios
      .get("https://reqres.in/api/colors", {params})
      .then(res => {
        this.colors = res.data.data;
        this.pages = res.data.total_pages;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    },
    changePage(page){
      this.page = page <= 0 || page > this.pages ? this.pages : page
      this.fetch()
    }
  }
};
</script>