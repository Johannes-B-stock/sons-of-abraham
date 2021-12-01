<template>
  <div
    class="buttons has-addons is-centered"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="500"
  >
    <a class="button button-light" href="/music">
      <span>{{ $t('cover.buttons.listen') }}</span>
    </a>

    <a class="button button-normal" href="#what-about">
      <span>{{ $t('cover.buttons.more') }}</span>
    </a>

    <a
      class="button button-light"
      href="https://geo.music.apple.com/us/album/sons-of-abraham/1563538824?itsct=music_box_link&itscg=30200&ct=albums_so_ns_of_abraham&ls=1&app=music"
    >
      <span>{{ $t('cover.buttons.buy') }}</span>
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
