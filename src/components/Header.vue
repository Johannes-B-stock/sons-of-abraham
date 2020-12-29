<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong> SoNs of Abraham</strong>
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
      class="navbar-menu"
      v-bind:class="{ 'is-active': isActive }"
    >
      <div class="navbar-end mr-5">
        <router-link class="navbar-item" to="/" exact>Home</router-link>
        <router-link class="navbar-item" to="/lyrics">Lyrics</router-link>
        <router-link class="navbar-item" to="/music">Music</router-link>
        <router-link class="navbar-item" to="/info">Info</router-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private isActive = false;
}
</script>
