<template>
  <section class="dear-listener is-clipped">
    <div class="container is-max-desktop">
      <div class="columns">
        <div
          class="column is-three-fifths has-text-white has-text-justified is-size-5-desktop is-size-6-touch p-6"
          style="margin-top:auto"
        >
          {{ firstText }}
        </div>
        <div class="column is-two-fifths p-0">
          <figure
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            class="image is-1024x638"
          >
            <img src="../assets/hill-city.jpg" width="100%" height="100%" />
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column is-hidden-mobile is-three-fifths p-0">
          <figure class="image is-1024x638">
            <img
              src="../assets/bridge.jpg"
              width="100%"
              height="100%"
              class="pb-3"
            />
          </figure>
        </div>
        <div class="column is-two-fifths has-text-white has-text-justified">
          <div class="is-size-5-desktop is-size-6-touch p-6 mb-2">
            {{ secondText }}
          </div>
        </div>
      </div>
    </div>
    <!-- <HomeTiles /> -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DearListener extends Vue {
  firstText = `the album you are about to hear was created by a music collective
            called Symphony of Nations. The journey to develop this album began
            in February 2017, as we travelled to Baghdad to visit local refugee
            camps in the area.`;
  secondText = `Our friends there explained to us how all over
            the world, Arabic speaking communities were in need of something
            that would invoke a sense of hope and peace, and invited us to
            collaborate with them to create a music project with a local singer.`;
}
</script>

<style scoped>
.dear-listener {
  background-color: #cfb999;
}
</style>
