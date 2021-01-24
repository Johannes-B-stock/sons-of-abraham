<template>
  <div>
    <section class="homepage-hero is-clipped">
      <div class="layer layer-1"></div>
      <div class="layer layer-2">
        <div class="is-12 is-vertical has-text-centered">
          <h1 class="title">SoNs of Abraham</h1>
          <img
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            class="cover mb-5"
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
    <section class="section dear-listener-2 has-background-link">
      <div class="has-background-brown rectangle"></div>
      <div class="has-background-danger circle left"></div>
      <div class="has-background-warning circle right"></div>
      <div class="container is-max-desktop p-6 has-text-justified is-size-5">
        <div class="more-padding-x">
          <span class="has-text-white">
            Over the course of two years, musicians from many different nations
            participated in the writing and recording of this album, each one
            bringing a unique flavor from their own culture. Now, as we near the
            end of 2020, we are delighted to present this final product to you.
            We hope to use this album as a point of connection between eastern
            and western cultures, and in particular, spotlight the beauty of the
            Iraqi heritage. We hope that what we have created together between
            nations will be a seed planted for new hope, new joy, and new life
            in the Middle East and beyond.
          </span>
        </div>
        <div
          data-aos-easing="ease-in-sine"
          data-aos="fade-zoom-in"
          class="big-centered-message is-italic has-text-weight-semibold has-text-centered p-6 is-size-3 has-text-white has-background-warning"
        >
          <span>
            "We hope <br />
            that what we have created together between nations will be a seed
            planted for new hope, new joy, and new life in the Middle East and
            beyond."
          </span>
        </div>
      </div>
    </section>
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
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
}
.circle {
  border-radius: 100%;
  width: 200px;
  height: 200px;
}
.rectangle {
  width: 150px;
  height: 350px;
  position: absolute;
  right: -5vw;
  margin-top: -3%;
}

.big-centered-message {
  border-top-left-radius: 40%;
  border-top-right-radius: 40%;
  margin-top: 150px;
  margin-left: auto;
  width: 400px;
  height: 500px;
  margin-right: auto;
}
.more-padding-x {
  padding: 0px 70px;
}
.left {
  left: -7vw;
  position: absolute;
  margin-top: 5%;
}

.right {
  right: -7vw;
  position: absolute;
  margin-top: -7%;
}
</style>
