<template>
  <div>
    <span
      class="icon is-size-2"
      @click="clickOnPlay()"
      v-bind:class="{ 'is-hidden': playing }"
    >
      <a><i class="fas fa-play-circle"></i> </a>
    </span>
    <span
      class="icon is-size-2"
      @click="clickOnPause()"
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
  public clickOnPlay() {
    this.play();
    this.playing = true;
    this.$emit('play-toggle', true);
  }
  public clickOnPause() {
    this.pause();
    this.playing = false;
    this.$emit('play-toggle', false);
  }
}
</script>
