<template>
  <div>
    <section class="has-background-primary">
      <img class="torbogen" src="../assets/torbogen.png" />
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
                :sources="currentSource"
                :loop="false"
                :autoplay="autoplay"
                :xhrWithCredentials="true"
                :xhrMethod="'POST'"
                :xhrHeaders="{ authorization: `Bearer ${token}` }"
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
import { store } from '@/router/store';
// import * as path from 'path';

@Component({
  components: {
    AudioPlayer,
    Song,
  },
})
export default class Music extends Vue {
  private songs = songs;
  private token = store.token;

  private locale = this.capitalizeFirstLetter(this.$i18n.locale);
  private songIndex = 0;
  private songTitle = this.songs[this.songIndex]['title' + this.locale];
  private lyrics = this.songs[this.songIndex]['text' + this.locale];
  private format = ['mp3'];
  private lyricsIndex = 0;
  private autoplay = false;
  host = 'https://sons-audio-server.herokuapp.com';
  url = this.host + '/song/';
  private currentSource = [this.url + this.songIndex];

  nextSong() {
    const wasAlreadyplaying = this.songs[this.songIndex].isPlaying;
    this.songs[this.songIndex].isPlaying = false;
    this.songIndex++;
    this.currentSource = ['notValid.mp3'];
    this.refreshSource();

    this.autoplay = wasAlreadyplaying ?? false;
    if (this.songIndex >= 11) {
      this.songIndex = 0;
    }
    this.refreshSource();

    this.showLyrics(this.songIndex + 1);
    this.songs[this.songIndex].isPlaying = wasAlreadyplaying;
  }
  private refreshSource() {
    this.currentSource = [this.url + this.songIndex];
  }

  previousSong() {
    const wasAlreadyplaying = this.songs[this.songIndex].isPlaying;
    this.songs[this.songIndex].isPlaying = false;
    this.songIndex--;
    wasAlreadyplaying && (this.autoplay = true);
    if (this.songIndex < 0) {
      this.songIndex = 0;
    }
    this.refreshSource();

    this.songs[this.songIndex].isPlaying = wasAlreadyplaying;
    this.showLyrics(this.songIndex);
  }
  playSong(track: number) {
    const wasAlreadyplaying = this.songs[this.songIndex].isPlaying;
    this.songs[this.songIndex].isPlaying = false;
    this.songIndex = track - 1;
    this.songTitle = this.songs[this.songIndex].titleEn;

    this.autoplay = wasAlreadyplaying ?? false;

    this.songs[this.songIndex].isPlaying = wasAlreadyplaying;
    this.refreshSource();
    this.showLyrics(track);
  }
  pauseSong() {
    this.songs[this.songIndex].isPlaying = false;
    this.autoplay = false;

    this.currentSource = ['notValid.mp3'];
  }
  playerToggled(playing: boolean) {
    const song = this.songs[this.songIndex];
    song.isPlaying = playing;
    if (this.currentSource.includes('notValid.mp3')) {
      this.refreshSource();
    }
    this.$set(this.songs, this.songIndex, song);
  }
  showLyrics(track: number) {
    this.lyricsIndex = track - 1;
    this.locale = this.capitalizeFirstLetter(this.$i18n.locale);
    const song = this.songs[this.lyricsIndex];
    this.songTitle = song['title' + this.locale] ?? song.titleEn;
    this.lyrics = (song['text' + this.locale] ?? song.textEn).replace(
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
.beige {
  background-color: #d0b999;
}
.grey-blue {
  background-color: #a8b6be;
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
