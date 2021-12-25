<template>
  <div id="app">
    <Header />
    <router-view />

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
body {
  font-family: 'Roboto', 'Lato', sans-serif;
}
html {
  scroll-behavior: smooth;
}

.ar {
  direction: rtl;
  font-language-override: 'ar';
}

.beige {
  background-color: #d0b999;
}
.grey-blue {
  background-color: #a8b6be;
}
.navbar.has-background-light {
  transition: background-color 300ms linear, box-shadow 300ms linear;
  box-shadow: 0 5px 5px -5px grey;
}
</style>
