import VueTyped from './VueTyped.vue';

const plugin = {
    install: (app) => {
        app.component('VueTyped', VueTyped);
    },
};

export default plugin;
