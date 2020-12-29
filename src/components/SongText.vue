<template>
  <div class="modal" v-bind:class="{ 'is-active': isActive }">
    <div class="modal-background" v-on:click="closeModal()"></div>
    <div class="modal-content">
      <div class="box lyrics p-6">
        <p class="title">{{ getTitle() }}</p>
        <p v-html="getText()"></p>
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
import { SongInfo } from '@/songs/songInterface';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class SongText extends Vue {
  @Prop() private song!: SongInfo;
  @Prop() private language!: 'en' | 'ar';
  @Prop() private active!: boolean;

  @Watch('active', { immediate: true, deep: true })
  onActiveChanged(val: boolean) {
    console.log(this.song.textEn);
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
  background-image: url('../assets/SON-backgrounds3.png');
}
</style>
