<template>
  <div>
    <section class="homepage-hero is-clipped">
      <div class="layer layer-1"></div>
      <div class="layer layer-2">
        <div class="is-12 is-vertical has-text-centered">
          <h1 class="title">SoNs of Abraham</h1>
          <img
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            data-aos-delay="200"
            class="cover vinyl mb-5 is-hidden-mobile"
            src="../assets/vinyl.png"
          />
          <img
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            class="cover shadow mb-5"
            src="../assets/CD_SON_2020_cover-notext.jpg"
          />
          <AlbumButtons />
        </div>
        <span class="icon is-size-3 arrow-down-icon">
          <a href="#what-about"><i class="fas fa-arrow-down primary"></i></a>
        </span>
      </div>
    </section>
    <WhatAbout />
    <DearListener />
    <DearListener2 />
    <Sons />
    <section class="section has-background-warning"></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomepageHero from '@/components/HomepageHero.vue';
import AlbumButtons from '@/components/AlbumButtons.vue';
import DearListener from '@/components/DearListener.vue';
import DearListener2 from '@/components/DearListener2.vue';
import WhatAbout from '@/components/WhatAbout.vue';
import Sons from '@/components/Sons.vue';

@Component({
  components: {
    HomepageHero,
    AlbumButtons,
    DearListener,
    DearListener2,
    WhatAbout,
    Sons,
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
  padding-top: 20vh;
}
.arrow-down-icon {
  position: absolute;
  bottom: 5%;
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
}
.vinyl {
  margin-right: -400px;
}
.shadow {
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
}
</style>
