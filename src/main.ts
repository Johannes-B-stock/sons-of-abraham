import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/main.scss';
import '@fortawesome/fontawesome-free/js/all';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      duration: 600,
    });
  },
  router,
  render: h => h(App),
}).$mount('#app');
