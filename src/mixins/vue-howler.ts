/* eslint-disable @typescript-eslint/consistent-type-assertions */
import Vue, { PropOptions } from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { Howl } from 'howler';
import assign from 'object-assign';
import clamp from 'math-clamp';
import values from 'object-values';

const VueHowlerProps = Vue.extend({
  props: {
    /**
     * An array of audio file urls
     */
    sources: <PropOptions<string[]>>{
      type: Array as () => Array<string>,
      required: true,
      validator(sources) {
        // Every source must be a non-empty string
        return sources.every(
          (source: string) => typeof source === 'string' && source.length > 0
        );
      },
    },
    /**
     * Whether to start the playback
     * when the component is mounted
     */
    autoplay: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether to start the playback again
     * automatically after it is done playing
     */
    loop: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether to start downloading the audio
     * file when the component is mounted
     */
    preload: {
      type: Boolean,
      default: true,
    },
    /**
     * Whether to force HTML5 Audio
     */
    html5: {
      type: Boolean,
      default: false,
    },
    /**
     * An array of audio file types
     */
    formats: <PropOptions<string[]>>{
      type: Array as () => Array<string>,
      default() {
        return [];
      },
    },
    /**
     * Whether to enable the withCredentials flag on XHR
     * requests used to fetch audio files when using Web Audio API
     */
    xhrWithCredentials: {
      type: Boolean,
      default: false,
    },
    xhrHeaders: <PropOptions<Record<string, string>>>{
      type: Object,
      default() {
        return {};
      },
    },

    xhrMethod: {
      type: String,
      default: 'GET',
    },
  },
});

// Define a super class component
@Component({})
export default class VueHowler extends VueHowlerProps {
  /**
   * The Howl instance used for playback
   */
  _howl: Howl | undefined;
  /**
   * Whether audio is currently playing
   */
  playing = false;
  /**
   * Whether the audio playback is muted
   */
  muted = false;
  /**
   * The volume of the playback on a scale of 0 to 1
   */
  volume = 1.0;
  /**
   * The rate (speed) of the playback on a scale of 0.5 to 4
   */
  rate = 1.0;
  /**
   * The position of playback in seconds
   */
  seek = 0;
  /**
   * The duration of the audio in seconds
   */
  duration = 0;
  /**
   * Functions that poll the Howl instance
   * to update various data
   */
  _polls = {
    seek: {
      id: -1,
      interval: 1000 / 4, // 4 times per second (4Hz)
      hook: () => {
        this.seek = +(this._howl?.seek() ?? 0);
      },
    },
  };
  /**
   * A list of howl events to listen to and
   * functions to call when they are triggered
   */
  _howlEvents = [
    {
      name: 'load',
      hook: () => {
        console.log('loaded');
        this.duration = this._howl?.duration() ?? 0;
      },
    },
    'loaderror',
    'playerror',
    {
      name: 'play',
      hook: () => {
        this.playing = true;
        console.log('playing');
      },
    },
    {
      name: 'end',
      hook: () => {
        this.playing = false;
      },
    },
    {
      name: 'pause',
      hook: () => {
        this.playing = false;
      },
    },
    {
      name: 'stop',
      hook: () => {
        this.playing = false;
        if (this?._howl) {
          this.seek = +this._howl.seek();
        }
      },
    },
    'mute',
    {
      name: 'volume',
      hook: () => {
        this.volume = this._howl?.volume() ?? 0;
      },
    },
    {
      name: 'rate',
      hook: () => {
        this.rate = this._howl?.rate() ?? 0;
      },
    },
    {
      name: 'seek',
      hook: () => {
        this.seek = +(this._howl?.seek() ?? 0);
      },
    },
    'fade',
  ];

  get progress() {
    if (this.duration === 0) return 0;
    return this.seek / this.duration;
  }

  created() {
    this._initialize();
  }

  beforeDestroy() {
    this._cleanup();
  }

  @Watch('playing')
  onPlayingChanged(value: boolean, oldValue: boolean) {
    // Update the seek
    this.seek = +(this._howl?.seek() ?? 0);

    if (!this._polls?.seek) {
      return;
    }
    if (value) {
      // Start the seek poll
      this._polls.seek.id = setInterval(
        this._polls.seek.hook,
        this._polls.seek.interval
      );
    } else {
      // Stop the seek poll
      clearInterval(this._polls.seek.id);
    }
  }

  @Watch('sources')
  onSourcesChanges() {
    this._reinitialize();
  }

  /**
   * Reinitialize the Howler player
   */
  _reinitialize() {
    this._cleanup(false);
    this._initialize();
  }
  /**
   * Initialize the Howler player
   */
  _initialize() {
    this._howl = new Howl({
      src: this.sources,
      volume: this.volume,
      html5: this.html5,
      loop: this.loop,
      preload: this.preload,
      autoplay: this.autoplay,
      mute: this.muted,
      rate: this.rate,
      format: this.formats,
      xhr: {
        headers: this.xhrHeaders,
        method: this.xhrMethod,
        withCredentials: this.xhrWithCredentials ? true : undefined,
      },
    });

    const duration = this._howl.duration();
    this.duration = duration;

    if (duration > 0) {
      // The audio file(s) have been cached. Howler won't
      // emit a load event, so we will do this manually
      this.$emit('load');
    }

    // Bind to all Howl events
    this._howlEvents = this._howlEvents?.map(
      (
        event:
          | string
          | {
              name: string;
              hook: () => void;
            }
      ) => {
        let normalizedEvent: {
          name: string;
          hook: () => void;
        };
        // Normalize string shorthands to objects
        if (typeof event === 'string') {
          normalizedEvent = {
            name: event,
            hook: () => {
              console.log('');
            },
          };
        } else {
          normalizedEvent = event;
        }

        // Create a handler
        const handler = (id: number, details: any) => {
          if (typeof normalizedEvent.hook === 'function')
            normalizedEvent.hook();
          this.$emit(normalizedEvent.name, id, details);
        };

        // Bind the handler
        this._howl?.on(normalizedEvent.name, handler);

        // Return the name and handler to unbind later
        return assign({}, event, { handler });
      }
    );
  }
  /**
   * Clean up the Howler player
   */
  _cleanup(resetSettings = true) {
    // Stop all playback
    if (this._howl) {
      this.stop();
    }

    // Stop all polls
    if (this._polls) {
      values(this._polls).forEach((poll: { id: number | null | undefined }) => {
        if (poll.id != null) clearInterval(poll.id);
      });
    }

    // Clear all event listeners
    this._howlEvents?.map(event => {
      if (typeof event === 'string') return event;
      if (event.hook) {
        if (this._howl) {
          this._howl.off(event.name, event.hook);
        }

        const _event = assign({}, event);
        delete _event.handler;
        return _event;
      }

      return event;
    });

    // Destroy the Howl instance
    this._howl = undefined;

    this.duration = 0;

    if (resetSettings) {
      this.muted = false;
      this.volume = 1.0;
      this.rate = 1.0;
    }
  }
  /**
   * Start the playback
   */
  play() {
    if (!this.playing) this._howl?.play();
  }
  /**
   * Pause the playback
   */
  pause() {
    if (this.playing) this._howl?.pause();
  }
  /**
   * Toggle playing or pausing the playback
   */
  togglePlayback() {
    if (!this.playing) {
      this._howl?.play();
    } else {
      this._howl?.pause();
    }
  }
  /**
   * Stop the playback (also resets the seek to 0)
   */
  stop() {
    this._howl?.stop();
  }
  /**
   * Mute the playback
   */
  mute() {
    this._howl?.mute(true);
    this.muted = true;
  }
  /**
   * Unmute the playback
   */
  unmute() {
    this._howl?.mute(false);
    this.muted = false;
  }
  /**
   * Toggle muting and unmuting the playback
   */
  toggleMute() {
    this._howl?.mute(!this.muted);
    this.muted = !this.muted;
  }
  /**
   * Set the volume of the playback
   * @param {Number} volume - The new volume.
   * The value is clamped between 0 and 1
   */
  setVolume(volume: any) {
    if (typeof volume !== 'number') {
      throw new Error(
        `volume must be a number, got a ${typeof volume} instead`
      );
    }

    this._howl?.volume(clamp(volume, 0, 1));
  }
  /**
   * Set the rate (speed) of the playback
   * @param {Number} rate - The new rate.
   * The value is clamped between 0.5 and 4
   */
  setRate(rate: any) {
    if (typeof rate !== 'number') {
      throw new Error(`rate must be a number, got a ${typeof rate} instead`);
    }

    this._howl?.rate(clamp(rate, 0.5, 4));
  }
  /**
   * Set the position of the playback
   * @param {Number} seek - The new position in seconds.
   * The value is clamped between 0 and the duration
   */
  setSeek(seek: number) {
    if (typeof seek !== 'number') {
      throw new Error(`seek must be a number, got a ${typeof seek} instead`);
    }

    this._howl?.seek(clamp(seek, 0, this.duration));
  }
  /**
   * Set the progress of the playback
   * @param {Number} progress - The new progress.
   * The value is clamped between 0 and 1
   */
  setProgress(progress: any) {
    if (typeof progress !== 'number') {
      throw new Error(
        `progress must be a number, got a ${typeof progress} instead`
      );
    }

    this.setSeek(clamp(progress, 0, 1) * this.duration);
  }
}
