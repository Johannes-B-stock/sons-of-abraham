<template>
  <footer class="footer has-background-warning pb-6">
    <cookie-law
      :buttonText="$t('footer.cookieButton')"
      buttonClass="button"
      theme="dark-lime"
    >
      <div slot="message">
        {{ $t('footer.cookie') }}
      </div>
    </cookie-law>
    <div class="container" style="margin-bottom:40px">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <a href="http://www.sons-music.de/" target="blank">
              <img src="../assets/SONS-logo-BW.svg" alt="SoNs" width="150px" />
            </a>
          </div>
        </div>
        <div class="level-item">
          <router-link class="navbar-item" to="/" exact>{{
            $t('header.about')
          }}</router-link>
          <router-link class="navbar-item" to="/music">{{
            $t('header.music')
          }}</router-link>
          <router-link class="navbar-item" to="/contact">{{
            $t('header.contact')
          }}</router-link>
        </div>
        <div class="level-right">
          <div class="level-item">
            <span class="icon icons has-text-success" style="font-size: 1.5em">
              <a
                href="https://www.facebook.com/SoNs.Symphony/"
                class=""
                target="blank"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </span>
          </div>
          <div class="level-item">
            <span class="icon icons has-text-info" style="font-size: 1.5em">
              <a
                href="https://open.spotify.com/album/0nVq2RGIw3WxL57GBUPEA1?si=XPPqUsJTRka3tnd-Aq8U_Q&dl_branch=1"
                target="blank"
              >
                <i class="fab fa-spotify"></i>
              </a>
            </span>
          </div>
          <div class="level-item">
            <span class="icon icons has-text-info" style="font-size: 1.5em">
              <a
                href="https://geo.music.apple.com/us/album/sons-of-abraham/1563538824?itsct=music_box_link&itscg=30200&ct=albums_so_ns_of_abraham&ls=1&app=music"
                target="blank"
              >
                <i class="fab fa-itunes"></i>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>

    <div class="has-text-centered is-size-7">
      <div class="navbar-item is-hidden-tablet">
        <LanguagePicker up="true" />
      </div>
      <p>
        Created by Johannes Birkenstock. Design and images by Rhythm DS. &copy;
        {{ date }}
        Sympony Of Nations (SoNs) all rights reserved
      </p>

      <p>
        <router-link class="has-text-brown is-size-7 mx-5" to="/impressum"
          >Impressum</router-link
        >
        <router-link class="has-text-brown is-size-7 mx-5" to="/datenschutz"
          >Datenschutz</router-link
        >
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CookieLaw from 'vue-cookie-law';
import LanguagePicker from './LanguagePicker.vue';

@Component({ components: { CookieLaw, LanguagePicker } })
export default class Footer extends Vue {
  private date: number = new Date().getFullYear();
}
</script>

<style scoped>
.footer {
  /* background-image: url(../assets/footer-background.png); */
  /* background-size: cover; */
  margin-top: 80px;
}
.logo {
  width: 150px;
  height: 60px;
}
</style>
