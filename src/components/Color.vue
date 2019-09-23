<template>
  <div class="column is-12-mobile is-4-desktop is-6-tablet">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{color.year}}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <h2>{{color.name}}</h2>
          <p>{{color.color}}</p>
        </div>
      </div>
      <footer class="card-footer">
        <span>{{color.pantone_value}}</span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Color",
  props: ['color']
};
</script>