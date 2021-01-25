<template>
  <nav
    class="is-transparent is-fixed-top navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a class="navbar-item is-size-3" href="/">
          <strong> SoNs</strong>
        </a>
        <a
          role="button"
          class="navbar-burger"
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
        class="navbar-menu is-boxed"
        v-bind:class="{ 'is-active': isActive }"
      >
        <div class="navbar-end mr-5">
          <router-link class="navbar-item" to="/" exact>Home</router-link>
          <router-link class="navbar-item" to="/lyrics">Lyrics</router-link>
          <router-link class="navbar-item" to="/music">Music</router-link>
          <router-link class="navbar-item" to="/info">Info</router-link>
          <div class="navbar-item px-6">
            <span class="icon has-text-info" style="font-size: 1.5em">
              <a href="https://www.facebook.com/SoNs.Symphony/" target="blank">
                <i class="fab fa-facebook"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private isActive = false;
}
</script>

<style scoped>
/* .navbar { */
/* z-index: 1010!; */
/* background-color: rgba(255, 255, 255, 0); */
/* } */
.brand-text {
  font-size: x-large;
}
</style>
