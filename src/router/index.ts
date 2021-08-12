import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Lyrics from '../views/Lyrics.vue';
import Music from '../views/Music.vue';
import { default as axios } from 'axios';
import { store } from './store';

Vue.use(VueRouter);

const audioServer = 'https://sons-audio-server.herokuapp.com/';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/info',
    name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (info.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue'),
  },

  {
    path: '/music',
    name: 'Music',
    component: Music,
  },
  {
    path: '/login/:hash',
    name: 'Login',
  },
  {
    path: '/lyrics',
    name: 'Lyrics',
    component: Lyrics,
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue'),
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: () => import('../views/Datenschutz.vue'),
  },

  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'is-active',
});

router.beforeEach(async (to, from, next) => {
  const hash = to.params['hash'];
  const token = Vue.$cookies.get('token');
  if (token && token.length > 0) {
    store.token = token;
  }
  if (hash !== undefined && hash.length > 0) {
    const tokenResultPromise = axios.post(`${audioServer}/token`, {
      hash: hash,
    });
    tokenResultPromise.catch(() => console.log('wrong hash'));
    const tokenResult = await tokenResultPromise;
    const newToken: string = tokenResult.data.token;
    store.token = newToken;
    Vue.$cookies.set('token', newToken);
    next('/music');
  }
  next();
});

export default router;
