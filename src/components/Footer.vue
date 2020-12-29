<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Created</strong> by <strong>Johannes Birkenstock</strong>. The
          source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          <br />
          &copy; {{ date }}
          <a href="http://sons-music.de/">Sympony Of Nations (SoNs)</a> all
          rights reserved
        </p>
        <span class="icon has-text-info" style="font-size: 2em;">
          <a href="https://www.facebook.com/SoNs.Symphony/" target="blank">
            <i class="fab fa-facebook"></i>
          </a>
        </span>
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
  background-image: url(../assets/footer-background.png);
  background-size: cover;
}
</style>
