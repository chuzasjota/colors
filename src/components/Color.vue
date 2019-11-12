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
      <div class="card">
        <div class="card-content" :style="{'background-color': color.color}">
          <p class="title title-color is-5 has-text-centered" :style="{'color': color.color}">
            {{ color.color }}
          </p>
        </div>
        <div class="content">
          <h1 class="title is-4">{{ title }}</h1>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            {{ color.year }}
          </p>
          <p class="card-footer-item">
            {{ color.pantone_value }}
          </p>
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
    //Funcion que muestra un mensaje al momento de copiar el color
    clipboardOk({ value, event }) {
      this.$buefy.toast.open({
        duration: 2000,
        message: `Se ha copiado el color ${ this.title } correctamente!`,
        position: 'is-top'
      })
    },
    //Error para la funcion de copy
    clipboardError({ value, event }) {
      this.$buefy.toast.open({
        duration: 2000,
        message: `No se ha copiado el color ${ this.title }`,
        position: 'is-bottom',
        type: 'is-danger'
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  border-radius:25px;
  .card-content {
    border-top-left-radius:25px;
    border-top-right-radius:25px;
    .title-color {
      background-color: white;
      border-radius: 50px;
      width: 30%;
      padding: 0.3rem;
    }
  }
  .content {
    padding-left: 0.625rem;
    padding-top: 0.6rem;
  }
  .card-footer {
    border-top: none;
    color: #A8A8A8;
    .card-footer-item {
      &:first-child {
        justify-content: flex-start;
        border-right: none;
      }
      justify-content: flex-end;
    }
  }
}
</style>
