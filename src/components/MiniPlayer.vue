<template>
  <div>
    <span
      class="icon is-size-2"
      @click="togglePlayback"
      v-bind:class="{ 'is-hidden': playing }"
    >
      <a><i class="fas fa-play-circle"></i> </a>
    </span>
    <span
      class="icon is-size-2"
      @click="togglePlayback"
      v-bind:class="{ 'is-hidden': !playing }"
    >
      <a>
        <i class="fas fa-pause-circle"></i>
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { VueHowler } from '../mixins/vue-howler';
// import VueHowler from 'vue-howler';

@Component({
  // mixins: [VueHowler as any],
})
export default class MiniPlayer extends Vue {}
</script>
