<template>
  <div class="level">
    <span
      class="level-item icon is-size-2"
      @click="togglePlayback"
      v-bind:class="{ 'is-hidden': playing }"
    >
      <a><i class="fas fa-play-circle"></i> </a>
    </span>
    <span
      class="level-item icon is-size-2"
      @click="togglePlayback"
      v-bind:class="{ 'is-hidden': !playing }"
    >
      <a>
        <i class="fas fa-pause-circle"></i>
      </a>
    </span>

    <progress
      class="mx-4 level-item progress is-primary"
      v-bind:value="progress * 100"
      max="100"
      >{{ progress * 100 }}%</progress
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueHowler from 'vue-howler';

@Component({
  mixins: [VueHowler],
})
export default class MiniPlayer extends Vue {}
</script>
