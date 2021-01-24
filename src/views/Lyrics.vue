<template>
  <section class="lyrics-hero">
    <div class="layer layer-1"></div>

    <div class="container is-max-desktop mt-4">
      <section class="section">
        <div class="box songlist mx-6">
          <h1 class="title">SoNs</h1>
          <h2 class="subtitle is-size-4">SoNs of Abraham</h2>
          <Song
            v-for="song in songs"
            v-bind:key="song.number"
            v-bind:song="song"
          />

          <br />
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Song from '@/components/Song.vue';
import { songs } from '@/content';

@Component({
  components: {
    Song,
  },
})
export default class Lyrics extends Vue {
  private songs = songs;
}
</script>

<style scoped>
.songlist {
  background-image: url('../assets/SON-backgrounds6.jpg');
  background-size: cover;
}

.lyrics-hero {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.lyrics-hero .layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.layer-1 {
  /* z-index: 1000; */
  background-image: url('../assets/children.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
