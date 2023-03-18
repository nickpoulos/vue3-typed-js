<template>
  <div ref="typedElement">
    <slot></slot>
  </div>
</template>

<script>
import VueTyped from './VueTyped.js';

export default {
  props: {
    strings: {
      type: Array,
      default: () => [],
    },
    stringsElement: {
      type: String,
      default: null,
    },
    typeSpeed: {
      type: Number,
      default: 30,
    },
    startDelay: {
      type: Number,
      default: 0,
    },
    backSpeed: {
      type: Number,
      default: 0,
    },
    smartBackspace: {
      type: Boolean,
      default: true,
    },
    shuffle: {
      type: Boolean,
      default: false,
    },
    backDelay: {
      type: Number,
      default: 700,
    },
    fadeOut: {
      type: Boolean,
      default: false,
    },
    fadeOutClass: {
      type: String,
      default: 'typed-fade-out',
    },
    fadeOutDelay: {
      type: Number,
      default: 500,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    loopCount: {
      type: Number,
      default: Infinity,
    },
    showCursor: {
      type: Boolean,
      default: true,
    },
    cursorChar: {
      type: String,
      default: '|',
    },
    autoInsertCss: {
      type: Boolean,
      default: true,
    },
    attr: {
      type: String,
      default: null,
    },
    bindInputFocusEvents: {
      type: Boolean,
      default: false,
    },
    contentType: {
      type: String,
      default: 'html',
    },
    onBegin: {
      type: Function,
      default: null,
    },
    onComplete: {
      type: Function,
      default: null,
    },
    preStringTyped: {
      type: Function,
      default: null,
    },
    onStringTyped: {
      type: Function,
      default: null,
    },
    onLastStringBackspaced: {
      type: Function,
      default: null,
    },
    onTypingPaused: {
      type: Function,
      default: null,
    },
    onTypingResumed: {
      type: Function,
      default: null,
    },
    onReset: {
      type: Function,
      default: null,
    },
    onStop: {
      type: Function,
      default: null,
    },
    onStart: {
      type: Function,
      default: null,
    },
    onDestroy: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      vueTyped: null,
    };
  },
  computed: {
    typedOptions() {
      const options = {};
      Object.keys(this.$props).forEach((key) => {
        if (this[key] !== undefined) {
          options[key] = this[key];
        }
      });
      return options;
    },
  },
  mounted() {
    this.vueTyped = new VueTyped(this.typedOptions);
    this.vueTyped.init(this.$refs.typedElement);
  },
  beforeUnmount() {
    this.vueTyped.destroy();
  },
};
</script>
