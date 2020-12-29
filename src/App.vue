<template>
  <div id="app">
    <Header />
    <div class="container is-max-widescreen my-5">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.navbar {
  background-image: url('./assets/cover_name_background.png');
}
</style>
