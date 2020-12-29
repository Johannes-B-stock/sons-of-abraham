<template>
  <div class="container is-max-desktop">
    <div class="box songlist mx-6">
      <h1 class="title">SoNs</h1>
      <h2 class="subtitle">SoNs of Abraham</h2>
      <Song v-for="song in songs" v-bind:key="song.number" v-bind:song="song" />

      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Song from '@/components/Song.vue';
import { songs } from '@/songs';

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
  background-image: url('../assets/SON-backgrounds12.png');
}
</style>
