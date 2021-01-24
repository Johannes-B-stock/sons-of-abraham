<template>
  <div>
    <footer class="footer pb-6 has-background-grey-lighter">
      <div class="content has-text-centered">
        <p>
          Created by Johannes Birkenstock. Design and images by Rhythm DS.
          <br />The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          <br />
          &copy; {{ date }}
          Sympony Of Nations (SoNs) all rights reserved
        </p>
        <div>
          <span class="icon has-text-info" style="font-size: 2em;">
            <a href="https://www.facebook.com/SoNs.Symphony/" target="blank">
              <i class="fab fa-facebook"></i>
            </a>
          </span>
          <br />
          <span>
            <a href="http://www.sons-music.de/" target="blank">
              <img src="SONS-logo-BW.svg" alt="SoNs" width="150px" />
              <!-- <object
                type="image/svg+xml"
                data="SONS-logo-BW.svg"
                class="logo is-clickable"
              >
                SoNs Logo
              </object> -->
            </a>
          </span>
        </div>
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
.footer {
  /* background-image: url(../assets/footer-background.png); */
  background-size: cover;
}
.logo {
  width: 150px;
  height: 60px;
}
</style>
