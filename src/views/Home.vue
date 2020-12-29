<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <img alt="Cover logo" src="../assets/cover.png" />
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">
            SoNs of Abraham
          </p>
          <p class="subtitle">
            What is this about?
          </p>
          <p>
            Dear listener, the album you are about to hear was created by a
            music collective called Symphony of Nations. The journey to develop
            this album began in February 2017, as we travelled to Baghdad to
            visit local refugee camps in the area. Our friends there explained
            to us how all over the world, Arabic speaking communities were in
            need of something that would invoke a sense of hope and peace, and
            invited us to collaborate with them to create a music project with a
            local singer. Over the course of two years, musicians from many
            different nations participated in the writing and recording of this
            album, each one bringing a unique flavor from their own culture.
            Now, as we near the end of 2020, we are delighted to present this
            final product to you. We hope to use this album as a point of
            connection between eastern and western cultures, and in particular,
            spotlight the beauty of the Iraqi heritage. we hope that what we
            have created together between nations will be a seed planted for new
            hope, new joy, and new life in the Middle East and beyond.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  // components: {
  //   HelloWorld,
  // },
})
export default class Home extends Vue {}
</script>
