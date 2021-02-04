<template>
  <section class="section music has-background-light">
    <div class="container is-max-desktop mt-4">
      <div class="level" style="max-width:150px; margin: auto">
        <span class="level-item icon is-size-4" v-on:click="previousSong">
          <a><i class="fas fa-angle-double-left"></i></a>
        </span>
        <MiniPlayer
          class="level-item"
          :sources="currentSource"
          :loop="false"
          :autoplay="autoplay"
        ></MiniPlayer>

        <span class="level-item icon is-size-4" v-on:click="nextSong">
          <a><i class="fas fa-angle-double-right"></i></a>
        </span>
      </div>
      <br /><br />
      <div class="level" style="max-width:150px; margin: auto">
        <AudioPlayer
          class="level-item"
          :sources="currentSource"
          :loop="false"
          :autoplay="autoplay"
        ></AudioPlayer>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MiniPlayer from '@/components/MiniPlayer.vue';
import AudioPlayer from '@/components/AudioPlayer.vue';

@Component({
  components: {
    MiniPlayer,
    AudioPlayer,
  },
})
export default class Music extends Vue {
  private index = 0;
  private autoplay = false;
  private allAudioSources = [
    './music/01-Trust in God_short.mp3',
    './music/02-Sing a new Song_short.mp3',
    './music/03-Camel_short.mp3',
  ];
  private currentSource = [this.allAudioSources[this.index]];
  nextSong() {
    this.index++;
    this.autoplay = true;
    if (this.index >= this.allAudioSources.length) {
      this.index = 0;
    }
    this.currentSource = [this.allAudioSources[this.index]];
  }
  previousSong() {
    this.index--;
    this.autoplay = true;
    if (this.index < 0) {
      this.index = 0;
    }
    this.currentSource = [this.allAudioSources[this.index]];
  }
}
</script>

<style scoped>
.music {
  padding-top: 200px;
  padding-bottom: 200px;
}
</style>
