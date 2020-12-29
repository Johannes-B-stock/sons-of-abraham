<template>
  <div>
    <SongText
      v-bind:song="song"
      v-bind:active="isActive"
      v-on:update:active="isActive = $event"
      v-bind:language="language"
    />
    <div class="columns is-vcentered">
      <div class="column right is-1 is-clickable" v-on:click="showLyrics('en')">
        {{ song.trackNumber }}
      </div>
      <div class="column left is-5 is-clickable" v-on:click="showLyrics('en')">
        {{ song.titleEn }}
      </div>
      <div
        class="column right is-5 is-clickable"
        dir="rtl"
        lang="ar"
        v-on:click="showLyrics('ar')"
      >
        {{ song.titleAr }}
      </div>
      <div class="column left is-1 is-clickable" v-on:click="showLyrics('ar')">
        {{ song.trackNumber }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SongInfo } from '@/songs/songInterface';
import { Component, Prop, Vue } from 'vue-property-decorator';
import SongText from '@/components/SongText.vue';

@Component({
  components: {
    SongText,
  },
})
export default class Song extends Vue {
  @Prop() private song!: SongInfo;
  private isActive = false;
  private language: 'en' | 'ar' = 'en';
  showLyrics(language: 'en' | 'ar') {
    console.log(language);
    this.language = language;
    this.isActive = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-clickable:hover {
  background-color: aquamarine;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
</style>
