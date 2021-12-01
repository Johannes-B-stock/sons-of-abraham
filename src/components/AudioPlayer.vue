<template>
  <div>
    <span
      class="icon is-size-2"
      @click="
        play();
        togglePlay();
      "
      v-bind:class="{ 'is-hidden': playing }"
    >
      <a><i class="fas fa-play-circle"></i> </a>
    </span>
    <span
      class="icon is-size-2"
      @click="
        pause();
        togglePlay();
      "
      v-bind:class="{ 'is-hidden': !playing }"
    >
      <a>
        <i class="fas fa-pause-circle"></i>
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import VueHowler from '../mixins/vue-howler';

@Component({})
export default class AudioPlayer extends mixins(VueHowler) {
  playing = false;
  togglePlay() {
    this.playing = !this.playing;
    this.$emit('play-toggle', this.playing);
  }
}
</script>
