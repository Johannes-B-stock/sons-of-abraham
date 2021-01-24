<template>
  <div>
    <SongText
      v-bind:song="song"
      v-bind:active="isActive"
      v-on:update:active="isActive = $event"
      v-bind:language="language"
    />
    <div
      class="columns is-vcentered is-size-5-desktop is-size-6-mobile is-size-6-tablet has-text-weight-medium"
    >
      <div class="column is-clickable" v-on:click="showLyrics('en')">
        <div class="columns is-mobile">
          <div class="column right is-2">
            {{ song.trackNumber }}
          </div>
          <div class="column left is-10">
            {{ song.titleEn }}
          </div>
        </div>
      </div>

      <div class="column is-clickable" v-on:click="showLyrics('ar')">
        <div class="columns is-mobile">
          <div class="column right is-10" dir="rtl" lang="ar">
            {{ song.titleAr }}
          </div>
          <div class="column left is-2">
            {{ song.trackNumber }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SongInfo } from '@/content/songInterface';
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
    this.language = language;
    this.isActive = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-clickable:hover {
  background-color: grey;
  border-radius: 5px;
  color: white;
  opacity: 0.7;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
</style>
