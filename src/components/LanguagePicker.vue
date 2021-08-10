<template>
  <div class="dropdown is-right" v-bind:class="{ 'is-active': dropdown }">
    <div class="dropdown-trigger">
      <button
        class="button"
        v-on:click="dropdown = !dropdown"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <img class="lang-icon" :src="'/flags/' + selectedLang + '.png'" />
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a
          v-for="(lang, i) in langs"
          :key="`Lang${i}`"
          :value="lang"
          v-on:click="changeLanguage(lang)"
          class="dropdown-item"
        >
          <img class="lang-icon" :src="'/flags/' + lang + '.png'" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class LanguagePicker extends Vue {
  langs = ['en', 'de', 'ar'];
  selectedLang = this.$i18n.locale;
  dropdown = false;

  mounted() {
    document.addEventListener('click', this.close);
  }

  beforeDestroy() {
    document.removeEventListener('click', this.close);
  }

  changeLanguage(lang: string) {
    this.dropdown = false;
    this.selectedLang = lang;
    this.$root.$i18n.locale = lang;
    this.$cookies.set('locale', lang);
  }
  close(ev: MouseEvent) {
    const target = ev.target;
    if (target instanceof Node && !this.$el.contains(target)) {
      this.dropdown = false;
    }
  }
}
</script>

<style scoped>
.lang-select {
  background-color: rgba(0, 0, 0, 0);
  border-width: 0;
  color: white;
}
.lang-icon {
  width: 25px;
  height: auto;
}
a.dropdown-item {
  padding-right: 1rem;
}
.dropdown-content {
  background-color: rgba(0, 0, 0, 0);
}
.button {
  border-width: 0px;
  background-color: rgba(0, 0, 0, 0);
}
.button:hover {
  box-shadow: 0em 0.5em 1em -0.125em rgba(0, 0, 0, 0.2),
    0 0 0 1px rgb(10, 10, 10, 0%);
}
</style>
