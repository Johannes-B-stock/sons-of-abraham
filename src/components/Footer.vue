<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Created</strong> by <strong>Johannes Birkenstock</strong>. The
          source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          &copy; <a href="http://sons-music.de/">Sympony Of Nations</a>
          {{ date }}.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  private date: number = new Date().getFullYear();
}
</script>
