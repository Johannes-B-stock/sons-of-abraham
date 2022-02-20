import Vue from 'vue';

export type AudioPlayerRef = Vue & {
  clickOnPlay: () => void;
  play: () => void;
  clickOnPause: () => void;
  pause: () => void;
};
