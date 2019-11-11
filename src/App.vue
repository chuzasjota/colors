<template>
  <div id="app">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Colores</h1>
          <span class="title-line"></span>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns is-desktop is-tablet is-mobile is-multiline is-centered box">
        <!-- Llamado al componente Color - Impresion de cada color -->
        <color v-for="color in colors" :key="color.id" v-bind:color="color"/>
      </div>
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
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
    this.allColors();
  },
  methods: {
    // Funcion que lista todos los colores + parametro de pagina siguiente
    allColors() {
      const params = {
        page: this.page
      };
      let result = axios
        .get("https://reqres.in/api/colors", { params })
        .then(res => {
          this.colors = res.data.data;
          this.pages = res.data.total_pages;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //Funcion para interactuar y validar paginador
    changePage(page) {
      this.page = page <= 0 || page > this.pages ? this.page : page;
      this.allColors();
    }
  }
};
</script>
<style lang="scss">
html{
  background-color: #F9F9F9;
}
.title-line{
  display: block;
  width: 10%;
  height: 2px;
  background: linear-gradient(270deg, #32C5FF 0%, #B620E0 51.26%, #F7B500 100%);
}
</style>
