<template>
  <nav
    class="is-transparent is-fixed-top navbar"
    v-bind:class="{ 'has-background-light': isActive }"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a href="http://www.sons-music.de/" target="blank">
          <img src="../assets/SONS-logo-BW.svg" alt="SoNs" width="150px" />
        </a>
        <a
          role="button"
          class="navbar-burger is-size-2"
          v-bind:class="{ 'is-active': isActive }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarItems"
          v-on:click="isActive = !isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarItems"
        class="navbar-menu"
        v-bind:class="{ 'is-active': isActive }"
      >
        <div class="navbar-end mr-5">
          <router-link class="navbar-item" to="/" exact>{{
            $t('header.about')
          }}</router-link>
          <router-link class="navbar-item" to="/music">{{
            $t('header.music')
          }}</router-link>
          <!-- <router-link class="navbar-item" to="/info">{{
            $t('header.info')
          }}</router-link> -->
          <router-link class="navbar-item" to="/contact">{{
            $t('header.contact')
          }}</router-link>
          <div class="navbar-item px-5">
            <span class="icon icons has-text-info" style="font-size: 1.5em">
              <a href="https://www.facebook.com/SoNs.Symphony/" target="blank">
                <i class="fab fa-facebook"></i>
              </a>
            </span>
            <span class="icon icons has-text-info" style="font-size: 1.5em">
              <a
                href="https://open.spotify.com/album/0nVq2RGIw3WxL57GBUPEA1?si=XPPqUsJTRka3tnd-Aq8U_Q&dl_branch=1"
                target="blank"
              >
                <i class="fab fa-spotify"></i>
              </a>
            </span>
            <span class="icon icons has-text-info" style="font-size: 1.5em">
              <a
                href="https://geo.music.apple.com/us/album/sons-of-abraham/1563538824?itsct=music_box_link&itscg=30200&ct=albums_so_ns_of_abraham&ls=1&app=music"
                target="blank"
              >
                <i class="fab fa-itunes"></i>
              </a>
            </span>
          </div>
          <div class="navbar-item is-hidden-mobile">
            <LanguagePicker />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LanguagePicker from './LanguagePicker.vue';

@Component({
  components: {
    LanguagePicker,
  },
})
export default class Header extends Vue {
  private isActive = false;
  private isScrolledToTop = true;
}
</script>

<style scoped>
/* .navbar { */
/* z-index: 1010!; */
/* background-color: rgba(255, 255, 255, 0); */
/* } */
/* 
@media screen and (max-width: 1024px) {
  .navbar {
    background-color: white !important;
    background-image: url(../assets/desert-header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
} */
.brand-text {
  font-size: x-large;
}
.icons {
  margin: 0px 5px;
}
</style>
