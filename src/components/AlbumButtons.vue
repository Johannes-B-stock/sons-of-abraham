<template>
  <div
    class="buttons has-addons is-centered"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="500"
  >
    <a class="button button-light" href="/music">
      <span>Listen now</span>
    </a>

    <a class="button button-normal" href="#what-about">
      <span>Know more</span>
    </a>

    <a class="button button-light" href="/lyrics">
      <span>Read lyrics</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AlbumButtons extends Vue {}
</script>

<style scoped>
.button-light {
  background-color: #eca783;
  border-color: #eca783;
}
.button-normal {
  background-color: #fa8e68;
  border-color: #fa8e68;
}
</style>
