<template>
  <div>
    <footer class="footer has-background-warning pb-6">
      <div class="content has-text-centered">
        <p>
          Created by Johannes Birkenstock. Design and images by Rhythm DS.
          &copy; {{ date }}
          Sympony Of Nations (SoNs) all rights reserved
        </p>
        <span>
          <a href="http://www.sons-music.de/" target="blank">
            <img src="../assets/SONS-logo-BW.svg" alt="SoNs" width="150px" />
            <!-- <object
                type="image/svg+xml"
                data="SONS-logo-BW.svg"
                class="logo is-clickable"
              >
                SoNs Logo
              </object> -->
          </a>
        </span>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  private date: number = new Date().getFullYear();
}
</script>

<style scoped>
/* .footer { */
/* background-image: url(../assets/footer-background.png); */
/* background-size: cover; */
/* } */
.logo {
  width: 150px;
  height: 60px;
}
</style>
