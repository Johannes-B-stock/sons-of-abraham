import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Lyrics from '../views/Lyrics.vue';
import Music from '../views/Music.vue';

Vue.use(VueRouter);

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'is-active',
});

export default router;
