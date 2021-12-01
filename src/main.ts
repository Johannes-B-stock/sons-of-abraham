import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './main.scss';
import '@fortawesome/fontawesome-free/js/all';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueI18n from 'vue-i18n';
import en from './languages/en';
import de from './languages/de';
import ar from './languages/ar';
import VueCookies from 'vue-cookies';
import cz from './languages/cz';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(VueCookies);

// Ready translated locale messages
const messages = {
  en: en,
  de: de,
  ar: ar,
  cz: cz,
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: Vue.$cookies.get('locale') ?? 'en', // set locale
  messages, // set locale messages
});

new Vue({
  created() {
    AOS.init({
      duration: 600,
    });
  },
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
