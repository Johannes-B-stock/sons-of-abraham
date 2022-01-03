<template>
  <div>
    <section
      class="section has-background-light is-medium has-text-left pt-6 is-size-5"
      :class="$i18n.locale"
    >
      <div
        class="container is-max-desktop mt-6 mb-2 links-text is-flex is-vcentered"
      >
        <div class="columns is-flex is-vcentered">
          <div class="ml-6">
            <span v-html="$t('links.text')"> </span>
          </div>
        </div>
      </div>
    </section>
    <div class="columns">
      <div class="column is-three-fifths has-background-primary">
        <div class="container has-text-left form-content" :class="$i18n.locale">
          <div class="row">
            <a href="https://www.bible.com/bible/1/GEN.1.KJV">Bible</a>
            <a href="https://www.bible.com/de/app" target="blank">
              <img src="../assets/bible.png" class="link-image"
            /></a>
          </div>
          <div class="row">
            <a href="https://www.jesusfilm.org/watch/jesus.html/english.html">
              Jesus Movie</a
            >
            <JesusMovie />
          </div>
        </div>
      </div>
      <div
        class="column is-two-fifths has-background-link"
        style="padding: 0px"
      >
        <figure class="image is-800x866">
          <img src="../assets/SoNs-2019-23.jpeg" />
        </figure>
      </div>
    </div>
    <section
      class="section is-large wall-background pt-6 is-size-2"
      style="margin-top:-12px"
    >
      <div
        class="container has-text-left is-max-desktop mt-6"
        style="max-width:300px"
      ></div>
    </section>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import JesusMovie from '@/components/JesusMovie.vue';

@Component({
  components: {
    JesusMovie,
  },
})
export default class Links extends Vue {}
</script>
<style scoped>
.form-content {
  margin: 10% 20%;
  max-width: 450px;
}

.wall-background {
  background-image: url(../assets/wall.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.link-image:hover {
  opacity: 0.6;
}
.container.ar {
  text-align: right !important;
}

.links-text {
  min-height: 250px;
}
</style>
