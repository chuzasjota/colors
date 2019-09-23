<template>
  <div class="column is-12-mobile is-4-desktop is-6-tablet">
    <!-- Utilizar v-clipboard para copiar el color -->
    <a
      v-clipboard="color.color"
      v-clipboard:success="clipboardOk"
      v-clipboard:error="clipboardError"
    >
      <!-- Estilos en linea para llamar el color como background -->
      <!-- Llamado de la información de los colores en estructura card -->
      <div class="card" :style="{'background-color': color.color}">
        <header class="card-header">
          <p class="card-header-title">{{color.year}}</p>
        </header>
        <div class="card-content">
          <div class="content has-text-centered">
            <h2>{{title}}</h2>
            <p>{{color.color}}</p>
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">{{color.pantone_value}}</p>
        </footer>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Color",
  props: ["color"],
  data() {
    return {
      title: this.color.name
    };
  },
  methods: {
    //Funcion que cambia el titulo al momento de copiar el color
    clipboardOk({ value, event }) {
      this.title = "Copiado!";
    },
    //Error para la funcion de copy
    clipboardError({ value, event }) {
      console.log("error", value);
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  border-radius: 10px;
  .card-header {
    box-shadow: none;
  }
  .card-footer {
    border-top: none;
    .card-footer-item {
      justify-content: flex-end;
    }
  }
}
</style>
