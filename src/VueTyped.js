import Typed from 'typed.js';

class VueTyped {
    constructor(options) {
        this.options = options;
        this.typed = null;
    }

    init(el) {
        this.typed = new Typed(el, this.options);
    }

    destroy() {
        if (this.typed) {
            this.typed.destroy();
        }
    }
}

export default VueTyped;
