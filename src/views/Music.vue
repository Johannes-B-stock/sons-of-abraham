<template>
  <div>
    <section class=" has-background-primary">
      <img class="torbogen" src="../assets/torbogen.png" />
    </section>
    <section class="has-background-light">
      <div class="columns is-gapless is-multiline">
        <div class="column is-5 beige">
          <div class="column-content-left">
            <div class="level">
              <span
                class="level-item has-text-success icon is-size-4"
                v-on:click="previousSong"
              >
                <a><i class="fas fa-angle-double-left"></i></a>
              </span>
              <AudioPlayer
                class="level-item"
                :sources="currentSource"
                :loop="false"
                :autoplay="autoplay"
              ></AudioPlayer>

              <span class="level-item icon is-size-4" v-on:click="nextSong">
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
              <div class="column is-1">
                <span class="icon" v-on:click="playSong(song.trackNumber)">
                  <a class="has-text-info"><i class="fas fa-play"></i> </a>
                </span>
              </div>

              <div
                v-bind:class="{
                  'song-active': lyricsIndex === song.trackNumber - 1,
                }"
                class="column song-title is-11"
              >
                {{ song.titleEn }}
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
import MiniPlayer from '@/components/MiniPlayer.vue';
import AudioPlayer from '@/components/AudioPlayer.vue';
import Song from '@/components/Song.vue';
import { songs } from '@/content';

@Component({
  components: {
    MiniPlayer,
    AudioPlayer,
    Song,
  },
})
export default class Music extends Vue {
  private songs = songs;
  private songTitle = '';
  private lyrics = '';
  private songIndex = 0;
  private lyricsIndex = -1;
  private autoplay = false;
  private allAudioSources = [
    '/music/01-Trust in God_short.mp3',
    '/music/02-Sing a new Song_short.mp3',
    '/music/03-Camel_short.mp3',
    '/music/04-The Alpha and Omega_short.mp3',
    '/music/05-Perfect Love_short.mp3',
    '/music/06-Your Glory_short.mp3',
    '/music/07-Great in Power_short.mp3',
    '/music/08-Anta Yasu_short.mp3',
    '/music/09-Perfect Love (English version)_short.mp3',
    '/music/10-Hallelu et Adoni_short.mp3',
    '/music/11-Come to the waters, He is calling you_short.mp3',
  ];
  private currentSource = [this.allAudioSources[this.songIndex]];
  nextSong() {
    this.songIndex++;
    this.autoplay = true;
    if (this.songIndex >= this.allAudioSources.length) {
      this.songIndex = 0;
    }
    this.currentSource = [this.allAudioSources[this.songIndex]];
  }
  previousSong() {
    this.songIndex--;
    this.autoplay = true;
    if (this.songIndex < 0) {
      this.songIndex = 0;
    }
    this.currentSource = [this.allAudioSources[this.songIndex]];
  }
  playSong(track: number) {
    this.songIndex = track - 1;
    this.songTitle = this.songs[this.songIndex].titleEn;
    this.autoplay = true;
    this.currentSource = [this.allAudioSources[this.songIndex]];
  }
  showLyrics(track: number) {
    this.lyricsIndex = track - 1;
    this.songTitle = this.songs[this.lyricsIndex].titleEn;
    this.lyrics = this.songs[this.lyricsIndex].textEn.replace(
      /(?:\r\n|\r|\n)/g,
      '<br>'
    );
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
