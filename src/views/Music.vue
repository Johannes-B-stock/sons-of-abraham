<template>
  <div>
    <section class="has-background-primary" :class="$i18n.locale">
      <img class="torbogen" src="../assets/music-background-a.png" />
    </section>
    <section class="has-background-light">
      <div class="columns is-gapless is-multiline">
        <div class="column is-5 beige">
          <div class="column-content-left">
            <div class="level is-mobile buttons">
              <span
                class="level-item has-text-success icon is-size-3"
                v-on:click="previousSong"
              >
                <a><i class="fas fa-angle-double-left"></i></a>
              </span>
              <AudioPlayer
                class="level-item"
                ref="audioPlayer"
                :sources="currentSource"
                :loop="false"
                :html5="true"
                :formats="format"
                v-on:play-toggle="playerToggled"
              ></AudioPlayer>

              <span class="level-item icon is-size-3" v-on:click="nextSong">
                <a><i class="fas fa-angle-double-right"></i></a>
              </span>
            </div>
            <br />
            <div
              v-for="song of songs"
              v-bind:key="song.trackNumber"
              class="columns is-mobile has-text-left"
              v-on:click="showLyrics(song.trackNumber)"
            >
              <div
                class="column is-1"
                v-bind:class="{ 'is-hidden': song.isPlaying }"
              >
                <span class="icon" v-on:click="playSong(song.trackNumber)">
                  <a class="has-text-info"><i class="fas fa-play"></i> </a>
                </span>
              </div>
              <div
                class="column is-1"
                v-bind:class="{ 'is-hidden': !song.isPlaying }"
              >
                <span class="icon" v-on:click="pauseSong()">
                  <a class="has-text-info"><i class="fas fa-stop"></i> </a>
                </span>
              </div>
              <div
                v-bind:class="{
                  'song-active': lyricsIndex === song.trackNumber - 1,
                }"
                class="column song-title is-11"
              >
                {{ song['title' + locale] }}
              </div>
            </div>
          </div>
        </div>
        <div class="column is-7 has-text-white is-size-5 grey-blue">
          <div
            v-bind:class="{ 'is-hidden': songTitle === '' }"
            class="has-text-left"
          >
            <div class="title-name is-size-3 has-text-weight-bold">
              {{ songTitle }}
            </div>
          </div>
          <div class="lyrics column-content">
            <span v-html="lyrics"> </span>
          </div>
        </div>
        <div class="column is-5 has-background-primary">
          <div class="sons-picture">
            <img src="../assets/SoNs-2019-17.png" />
          </div>
        </div>
        <div class="column is-7 city-background"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AudioPlayer from '@/components/AudioPlayer.vue';
import Song from '@/components/Song.vue';
import { songs } from '@/content';
import { AudioPlayerRef } from '../mixins/audioPlayerRef';

@Component({
  components: {
    AudioPlayer,
    Song,
  },
})
export default class Music extends Vue {
  private songs = songs;

  private locale = this.capitalizeFirstLetter(this.$i18n.locale);
  private lyricsIndex = 0;
  private songIndex = 0;
  private songTitle = this.songs[this.songIndex]['title' + this.locale];
  private format = ['mp3'];
  host = process.env.VUE_APP_AUDIO_SERVER ?? 'http://localhost:8000';
  url = this.host + '/song/';
  private currentSource = [this.url + this.songIndex + '/full'];
  private lyrics = this.songs[this.lyricsIndex]['text' + this.locale].replace(
    /(?:\r\n|\r|\n)/g,
    '<br>'
  );

  nextSong() {
    const wasAlreadyPlaying = this.songs[this.songIndex].isPlaying;
    this.songs[this.songIndex].isPlaying = false;
    this.songIndex++;

    if (this.songIndex >= 11) {
      this.songIndex = 0;
    }
    this.setNewSong(wasAlreadyPlaying);
  }

  private refreshSource() {
    this.currentSource = [this.url + this.songIndex + '/full'];
  }

  previousSong() {
    const wasAlreadyPlaying = this.songs[this.songIndex].isPlaying;
    this.songs[this.songIndex].isPlaying = false;
    this.songIndex--;
    if (this.songIndex < 0) {
      this.songIndex = 0;
    }
    this.setNewSong(wasAlreadyPlaying);
  }

  private setNewSong(wasAlreadyPlaying: boolean | undefined) {
    this.refreshSource();
    this.songs[this.songIndex].isPlaying = wasAlreadyPlaying;
    this.showLyrics(this.songIndex + 1);
  }

  playSong(track: number) {
    if (this.songIndex === track - 1) {
      (this.$refs.audioPlayer as AudioPlayerRef).clickOnPlay();
      return;
    }
    this.songs[this.songIndex].isPlaying = false;
    this.songIndex = track - 1;
    this.songTitle = this.songs[this.songIndex].titleEn;
    this.setNewSong(true);
    (this.$refs.audioPlayer as AudioPlayerRef).clickOnPlay();
  }
  pauseSong() {
    this.songs[this.songIndex].isPlaying = false;
    (this.$refs.audioPlayer as AudioPlayerRef).clickOnPause();
  }
  playerToggled(playing: boolean) {
    const song = this.songs[this.songIndex];
    song.isPlaying = playing;
    this.$set(this.songs, this.songIndex, song);
  }
  showLyrics(track: number) {
    this.lyricsIndex = track - 1;
    this.locale = this.capitalizeFirstLetter(this.$i18n.locale);
    const song = this.songs[this.lyricsIndex];
    this.songTitle = song['title' + this.locale] ?? song.titleEn;
    this.lyrics = this.getLyrics();
  }

  private getLyrics(): any {
    if (!this.songs) return '';
    const song = this.songs[this.lyricsIndex];
    return (song['text' + this.locale] ?? song.textEn).replace(
      /(?:\r\n|\r|\n)/g,
      '<br>'
    );
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
</script>

<style scoped>
.music {
  padding-top: 200px;
  padding-bottom: 200px;
}
.torbogen {
  width: auto;
  max-height: 80vh;
  margin-bottom: -7px;
  margin-top: 50px;
}
.buttons {
  margin: 0% 30%;
}

.column-content {
  padding: 30px;
  max-width: 600px;
  margin: auto;
}
.column-content-left {
  padding: 30px;
  max-width: 600px;
  margin-left: auto;
}

.column-content-right {
  padding: 30px;
  max-width: 600px;
  margin-right: auto;
}
.song-title:hover {
  background-color: #a8b6be;
}
.song-active {
  background-color: #a8b6be;
}
.title-name {
  background-color: #e3a44c;
  border-radius: 0px 0px 50px;
  padding: 10px 20px;
  text-align: left;
  display: inline-block;
  height: auto;
}
.sons-picture {
  height: 100%;
  margin: 40px 0px;
}
.city-background {
  background-image: url(../assets/yellow-city.jpg);
  background-size: cover;
  min-height: 600px;
}
</style>
