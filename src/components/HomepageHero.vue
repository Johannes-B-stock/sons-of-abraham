<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomepageHero extends Vue {}
</script>

<style scoped>
.homepage-hero .layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
</style>
