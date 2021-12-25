<template>
  <section id="what-about" class="section pb-0" :class="$i18n.locale">
    <section
      class="section is-hidden-tablet top-round has-background-danger is-two-fifths has-text-white is-size-3"
    >
      {{ $t('about.about') }}
    </section>
    <div class="container is-max-desktop" style="margin-top:150px;">
      <div class="columns is-hidden-mobile ">
        <div
          class="column dear-listener has-text-white pr-6 pb-3 is-three-fifths is-size-3 is-italic"
        >
          {{ $t('about.listener') }}
        </div>

        <div
          class="column is-two-fifths top-round has-text-white what-about-text is-size-2-desktop is-size-3-touch"
          data-aos="fade-left"
          data-aos-once="true"
        >
          {{ $t('about.about') }}
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
  background-image: url(../assets/wave.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.dear-listener {
  text-align: right;
  padding-top: 280px;
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
