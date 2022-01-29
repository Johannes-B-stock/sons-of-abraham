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
    <section class="section is-medium has-background-primary">
      <div class="container is-max-desktop">
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-3">
                <article class="tile is-child box has-background-brown">
                  <p class="title">Bible</p>
                  <a href="https://www.bible.com/bible/1/GEN.1.KJV"
                    >Read the Bible</a
                  >
                  <br />
                </article>
              </div>
              <div class="tile is-parent is-3">
                <article class="tile is-child box has-background-brown">
                  <p class="title">Bible app</p>
                  <a href="https://www.bible.com/de/app" target="blank">
                    <img src="../assets/bible.png" class="link-image"
                  /></a>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box has-background-brown">
                <p class="title">Jesus Movie</p>
                <JesusMovie />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

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

.columns {
  margin-right: 0 !important;
}
.links-text {
  min-height: 250px;
}
</style>
