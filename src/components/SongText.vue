<template>
  <div class="modal" v-bind:class="{ 'is-active': isActive }">
    <div class="modal-background" v-on:click="closeModal()"></div>
    <div class="modal-content">
      <div class="box lyrics py-5">
        <div class="watermark">
          {{ song.trackNumber }}
        </div>
        <p class="title">{{ getTitle() }}</p>
        <p
          class="has-text-centered is-size-5-desktop is-size-7-mobile is-size-6-tablet"
          v-html="getText()"
        ></p>
        <br />
      </div>
    </div>
    <button
      class="modal-close is-large"
      v-on:click="closeModal()"
      aria-label="close"
    ></button>
  </div>
</template>

<script lang="ts">
import { SongInfo } from '@/content/songInterface';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class SongText extends Vue {
  @Prop() private song!: SongInfo;
  @Prop() private language!: 'en' | 'ar';
  @Prop() private active!: boolean;

  @Watch('active', { immediate: true, deep: true })
  onActiveChanged(val: boolean) {
    this.isActive = val;
  }
  private isActive = this.active;

  closeModal() {
    this.isActive = false;
    this.$emit('update:active', false);
  }
  getText() {
    const rawText =
      this.language === 'en' ? this.song.textEn : this.song.textAr;

    return rawText.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
  getTitle() {
    return this.language === 'en' ? this.song.titleEn : this.song.titleAr;
  }
}
</script>

<style scoped>
.lyrics {
  background-image: url('../assets/songtext-background.png');
  background-size: cover;
  line-height: 2.1rem;
}
.watermark {
  position: fixed;
  font-size: 80px;
  opacity: 0.1;
  z-index: 99;
  color: black;
}
</style>
