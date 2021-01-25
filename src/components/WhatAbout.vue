<template>
  <section id="what-about" class="section pb-0">
    <section
      class="section is-hidden-tablet top-round has-background-danger is-two-fifths has-text-white is-size-3"
    >
      What is this about?
    </section>
    <div class="container is-max-desktop">
      <div class="columns is-hidden-mobile ">
        <div class="column is-three-fifths"></div>

        <div
          class="column is-two-fifths top-round has-text-white what-about-text is-size-2-desktop is-size-3-touch"
          data-aos="fade-left"
        >
          What is this about?
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WhatAbout extends Vue {}
</script>

<style scoped>
#what-about {
  background-color: #bfc8c9;
}
.top-round {
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}
.what-about-text {
  background-color: #c93e3b;
  height: 350px;
  padding-top: 250px;
}
</style>
