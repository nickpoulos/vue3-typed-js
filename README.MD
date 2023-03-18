# vue3-typed-js

A Vue3 wrapper for Typed.js library.   

## Installation

```bash
npm install vue3-typed-js
```

## Usage

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import VueTyped from 'vue3-typed-js';

const app = createApp(App);
app.use(VueTyped);
app.mount('#app');
```

Example usage inside your Vue component:

```vue
<template>
<VueTyped
:strings="typedStrings"
:typeSpeed="50"
:backSpeed="30"
:loop="true"
@onComplete="handleComplete"
></VueTyped>
</template>

<script>
export default {
  data() {
    return {
      typedStrings: ['Hello, ^1000 I am Typed.js', 'And I work with Vue 3!'],
    };
  },
  methods: {
    handleComplete() {
      console.log('Typing is complete');
    },
  },
};
</script>
```

## Props

| Prop                  | Type      | Description                                                                                     |
|-----------------------|-----------|-------------------------------------------------------------------------------------------------|
| strings               | Array     | An array of strings to type                                                                     |
| typeSpeed             | Number    | Typing speed in milliseconds                                                                    |
| startDelay            | Number    | Time before typing starts (in milliseconds)                                                     |
| backSpeed             | Number    | Backspacing speed in milliseconds                                                               |
| smartBackspace        | Boolean   | Enable/disable smart backspace                                                                  |
| shuffle               | Boolean   | Enable/disable shuffling of strings                                                             |
| backDelay             | Number    | Time before backspacing (in milliseconds)                                                       |
| fadeOut               | Boolean   | Enable/disable fade out animation                                                               |
| fadeOutClass          | String    | CSS class for fade animation                                                                    |
| fadeOutDelay          | Number    | Fade out delay in milliseconds                                                                  |
| loop                  | Boolean   | Enable/disable loop                                                                             |
| loopCount             | Number    | Number of loops or `Infinity`                                                                   |
| showCursor            | Boolean   | Show/hide the cursor                                                                            |
| autoInsertCss         | Boolean   | Insert CSS for cursor and fadeOut into HTML <head>                                             |
| attr                  | String    | Attribute for typing                                                                            |
| bindInputFocusEvents  | Boolean   | Bind to focus and blur if el is text input or textarea                                          |
| contentType           | String    | 'html' or 'null' for plaintext                                                                  |
| onComplete            | Function  | Callback when typing is complete                                                                |
| preStringTyped        | Function  | Callback before a string is typed                                                               |
| onStringTyped         | Function  | Callback when a string is typed                                                                 |
| onLastStringBackspaced| Function  | Callback when the last string is typed and backspaced                                          |
| onTypingPaused        | Function  | Callback when typing is paused                                                                  |
| onTypingResumed       | Function  | Callback when typing is resumed                                                                 |
| onReset               | Function  | Callback when the typed instance is reset                                                       |
| onStop                | Function  | Callback when the typed instance is stopped                                                     |
| onStart               | Function  | Callback when the typed instance starts                                                         |
| onDestroy             | Function  | Callback when the typed instance is destroyed                                                   |

## License

MIT
