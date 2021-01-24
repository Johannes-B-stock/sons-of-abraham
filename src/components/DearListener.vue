<template>
  <section class=" dear-listener">
    <div class="container is-max-desktop">
      <div class="columns">
        <div
          class="column is-three-fifths has-text-white has-text-right is-size-3 p-4"
          style="margin-top:auto"
        >
          Dear listener,
        </div>
        <div class="column is-two-fifths p-0">
          <figure class="image is-1024x638">
            <img src="../assets/hill-city.jpg" width="100%" height="100%" />
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column is-three-fifths p-0">
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
          <div class="is-size-5 m-5">
            the album you are about to hear was created by a music collective
            called Symphony of Nations. The journey to develop this album began
            in February 2017, as we travelled to Baghdad to visit local refugee
            camps in the area. Our friends there explained to us how all over
            the world, Arabic speaking communities were in need of something
            that would invoke a sense of hope and peace, and invited us to
            collaborate with them to create a music project with a local singer.
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
export default class DearListener extends Vue {}
</script>
