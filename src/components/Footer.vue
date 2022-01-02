<template>
  <div>
    <footer class="footer has-background-warning pb-6">
      <cookie-law
        :buttonText="$t('footer.cookieButton')"
        buttonClass="button"
        theme="dark-lime"
      >
        <div slot="message">
          {{ $t('footer.cookie') }}
        </div>
      </cookie-law>
      <div class="content has-text-centered">
        <div class="navbar-item is-hidden-tablet">
          <LanguagePicker up="true" />
        </div>
        <p>
          Created by Johannes Birkenstock. Design and images by Rhythm DS.
          &copy; {{ date }}
          Sympony Of Nations (SoNs) all rights reserved
        </p>

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
import CookieLaw from 'vue-cookie-law';
import LanguagePicker from './LanguagePicker.vue';

@Component({ components: { CookieLaw, LanguagePicker } })
export default class Footer extends Vue {
  private date: number = new Date().getFullYear();
}
</script>

<style scoped>
.footer {
  /* background-image: url(../assets/footer-background.png); */
  /* background-size: cover; */
  margin-top: 80px;
}
.logo {
  width: 150px;
  height: 60px;
}
</style>
