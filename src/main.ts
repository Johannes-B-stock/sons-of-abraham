import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
