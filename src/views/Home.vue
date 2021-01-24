<template>
  <div>
    <section class="homepage-hero is-clipped">
      <div class="layer layer-1"></div>
      <div class="layer layer-2">
        <div class="is-12 is-vertical has-text-centered">
          <h1 class="title">SoNs of Abraham</h1>
          <img
            class="cover mb-5"
            src="../assets/CD_SON_2020_cover-notext.jpg"
          />
          <AlbumButtons />
        </div>
        <span class="icon is-size-3" style="margin-top: 10vh">
          <a><i class="fas fa-arrow-down primary"></i></a>
        </span>
      </div>
    </section>
    <WhatAbout />
    <DearListener />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomepageHero from '@/components/HomepageHero.vue';
import AlbumButtons from '@/components/AlbumButtons.vue';
import DearListener from '@/components/DearListener.vue';
import WhatAbout from '@/components/WhatAbout.vue';

@Component({
  components: {
    HomepageHero,
    AlbumButtons,
    DearListener,
    WhatAbout,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.title {
  text-shadow: 1px 1px white;
}
.homepage-hero {
  height: 100vh;
  position: relative;
}
.homepage-hero .layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
.homepage-hero h1 {
  padding-top: 22vh;
}
.layer-1 {
  /* z-index: 1000; */
  background-image: url('../assets/desert-wide.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.cover {
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
}
.dear-listener {
  background-color: #cfb999;
}
</style>
