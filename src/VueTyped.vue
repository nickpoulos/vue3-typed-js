<template>
  <div ref="typedElement">
    <slot></slot>
  </div>
</template>

<script>
import VueTyped from './VueTyped.js';

export default {
  props: {
    strings: Array,
    typeSpeed: Number,
    startDelay: Number,
    backSpeed: Number,
    smartBackspace: Boolean,
    shuffle: Boolean,
    backDelay: Number,
    fadeOut: Boolean,
    fadeOutClass: String,
    fadeOutDelay: Number,
    loop: Boolean,
    loopCount: Number,
    showCursor: Boolean,
    autoInsertCss: Boolean,
    attr: String,
    bindInputFocusEvents: Boolean,
    contentType: String,
    onComplete: Function,
    preStringTyped: Function,
    onStringTyped: Function,
    onLastStringBackspaced: Function,
    onTypingPaused: Function,
    onTypingResumed: Function,
    onReset: Function,
    onStop: Function,
    onStart: Function,
    onDestroy: Function,
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