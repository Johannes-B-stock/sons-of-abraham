<template>
  <div id="app">
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          SoNs of Abraham
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/lyrics">Lyrics</router-link>
          <router-link class="navbar-item" to="/music">Music</router-link>
          <router-link class="navbar-item" to="/info">Info</router-link>
        </div>
      </div>
    </nav>

    <div class="container is-max-widescreen mt-5">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue"; // @ is an alias to /src

@Component({
  components: {
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
