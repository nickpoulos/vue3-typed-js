import { openBlock as f, createElementBlock as g, renderSlot as m } from "vue";
function c() {
  return c = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
    }
    return i;
  }, c.apply(this, arguments);
}
var b = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: !0, shuffle: !1, backDelay: 700, fadeOut: !1, fadeOutClass: "typed-fade-out", fadeOutDelay: 500, loop: !1, loopCount: 1 / 0, showCursor: !0, cursorChar: "|", autoInsertCss: !0, attr: null, bindInputFocusEvents: !1, contentType: "html", onBegin: function(i) {
}, onComplete: function(i) {
}, preStringTyped: function(i, e) {
}, onStringTyped: function(i, e) {
}, onLastStringBackspaced: function(i) {
}, onTypingPaused: function(i, e) {
}, onTypingResumed: function(i, e) {
}, onReset: function(i) {
}, onStop: function(i, e) {
}, onStart: function(i, e) {
}, onDestroy: function(i) {
} }, C = new (/* @__PURE__ */ function() {
  function i() {
  }
  var e = i.prototype;
  return e.load = function(t, s, n) {
    if (t.el = typeof n == "string" ? document.querySelector(n) : n, t.options = c({}, b, s), t.isInput = t.el.tagName.toLowerCase() === "input", t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function(p) {
      return p.trim();
    }), t.stringsElement = typeof t.options.stringsElement == "string" ? document.querySelector(t.options.stringsElement) : t.options.stringsElement, t.stringsElement) {
      t.strings = [], t.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
      var o = Array.prototype.slice.apply(t.stringsElement.children), r = o.length;
      if (r)
        for (var a = 0; a < r; a += 1)
          t.strings.push(o[a].innerHTML.trim());
    }
    for (var u in t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }, t.typingComplete = !1, t.strings)
      t.sequence[u] = u;
    t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t);
  }, e.getCurrentElContent = function(t) {
    return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : t.contentType === "html" ? t.el.innerHTML : t.el.textContent;
  }, e.appendAnimationCss = function(t) {
    var s = "data-typed-js-css";
    if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + s + "]")) {
      var n = document.createElement("style");
      n.type = "text/css", n.setAttribute(s, !0);
      var o = "";
      t.showCursor && (o += `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `), t.fadeOut && (o += `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `), n.length !== 0 && (n.innerHTML = o, document.body.appendChild(n));
    }
  }, i;
}())(), l = new (/* @__PURE__ */ function() {
  function i() {
  }
  var e = i.prototype;
  return e.typeHtmlChars = function(t, s, n) {
    if (n.contentType !== "html")
      return s;
    var o = t.substr(s).charAt(0);
    if (o === "<" || o === "&") {
      var r;
      for (r = o === "<" ? ">" : ";"; t.substr(s + 1).charAt(0) !== r && !(1 + ++s > t.length); )
        ;
      s++;
    }
    return s;
  }, e.backSpaceHtmlChars = function(t, s, n) {
    if (n.contentType !== "html")
      return s;
    var o = t.substr(s).charAt(0);
    if (o === ">" || o === ";") {
      var r;
      for (r = o === ">" ? "<" : "&"; t.substr(s - 1).charAt(0) !== r && !(--s < 0); )
        ;
      s--;
    }
    return s;
  }, i;
}())(), v = /* @__PURE__ */ function() {
  function i(t, s) {
    C.load(this, s, t), this.begin();
  }
  var e = i.prototype;
  return e.toggle = function() {
    this.pause.status ? this.start() : this.stop();
  }, e.stop = function() {
    this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
  }, e.start = function() {
    this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
  }, e.destroy = function() {
    this.reset(!1), this.options.onDestroy(this);
  }, e.reset = function(t) {
    t === void 0 && (t = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
  }, e.begin = function() {
    var t = this;
    this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
      t.currentElContent && t.currentElContent.length !== 0 ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
    }, this.startDelay);
  }, e.typewrite = function(t, s) {
    var n = this;
    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
    var o = this.humanizer(this.typeSpeed), r = 1;
    this.pause.status !== !0 ? this.timeout = setTimeout(function() {
      s = l.typeHtmlChars(t, s, n);
      var a = 0, u = t.substr(s);
      if (u.charAt(0) === "^" && /^\^\d+/.test(u)) {
        var p = 1;
        p += (u = /\d+/.exec(u)[0]).length, a = parseInt(u), n.temporaryPause = !0, n.options.onTypingPaused(n.arrayPos, n), t = t.substring(0, s) + t.substring(s + p), n.toggleBlinking(!0);
      }
      if (u.charAt(0) === "`") {
        for (; t.substr(s + r).charAt(0) !== "`" && (r++, !(s + r > t.length)); )
          ;
        var h = t.substring(0, s), d = t.substring(h.length + 1, s + r), y = t.substring(s + r + 1);
        t = h + d + y, r--;
      }
      n.timeout = setTimeout(function() {
        n.toggleBlinking(!1), s >= t.length ? n.doneTyping(t, s) : n.keepTyping(t, s, r), n.temporaryPause && (n.temporaryPause = !1, n.options.onTypingResumed(n.arrayPos, n));
      }, a);
    }, o) : this.setPauseStatus(t, s, !0);
  }, e.keepTyping = function(t, s, n) {
    s === 0 && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
    var o = t.substr(0, s += n);
    this.replaceText(o), this.typewrite(t, s);
  }, e.doneTyping = function(t, s) {
    var n = this;
    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
      n.backspace(t, s);
    }, this.backDelay));
  }, e.backspace = function(t, s) {
    var n = this;
    if (this.pause.status !== !0) {
      if (this.fadeOut)
        return this.initFadeOut();
      this.toggleBlinking(!1);
      var o = this.humanizer(this.backSpeed);
      this.timeout = setTimeout(function() {
        s = l.backSpaceHtmlChars(t, s, n);
        var r = t.substr(0, s);
        if (n.replaceText(r), n.smartBackspace) {
          var a = n.strings[n.arrayPos + 1];
          n.stopNum = a && r === a.substr(0, s) ? s : 0;
        }
        s > n.stopNum ? (s--, n.backspace(t, s)) : s <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.options.onLastStringBackspaced(), n.shuffleStringsIfNeeded(), n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], s));
      }, o);
    } else
      this.setPauseStatus(t, s, !1);
  }, e.complete = function() {
    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
  }, e.setPauseStatus = function(t, s, n) {
    this.pause.typewrite = n, this.pause.curString = t, this.pause.curStrPos = s;
  }, e.toggleBlinking = function(t) {
    this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
  }, e.humanizer = function(t) {
    return Math.round(Math.random() * t / 2) + t;
  }, e.shuffleStringsIfNeeded = function() {
    this.shuffle && (this.sequence = this.sequence.sort(function() {
      return Math.random() - 0.5;
    }));
  }, e.initFadeOut = function() {
    var t = this;
    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
      t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
    }, this.fadeOutDelay);
  }, e.replaceText = function(t) {
    this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : this.contentType === "html" ? this.el.innerHTML = t : this.el.textContent = t;
  }, e.bindFocusEvents = function() {
    var t = this;
    this.isInput && (this.el.addEventListener("focus", function(s) {
      t.stop();
    }), this.el.addEventListener("blur", function(s) {
      t.el.value && t.el.value.length !== 0 || t.start();
    }));
  }, e.insertCursor = function() {
    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
  }, i;
}();
let k = class {
  constructor(e) {
    this.options = e, this.typed = null;
  }
  init(e) {
    this.typed = new v(e, this.options);
  }
  destroy() {
    this.typed && this.typed.destroy();
  }
};
const T = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [s, n] of e)
    t[s] = n;
  return t;
}, S = {
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
    onDestroy: Function
  },
  data() {
    return {
      vueTyped: null
    };
  },
  computed: {
    typedOptions() {
      const i = {};
      return Object.keys(this.$props).forEach((e) => {
        this[e] !== void 0 && (i[e] = this[e]);
      }), i;
    }
  },
  mounted() {
    this.vueTyped = new k(this.typedOptions), this.vueTyped.init(this.$refs.typedElement);
  },
  beforeUnmount() {
    this.vueTyped.destroy();
  }
}, P = { ref: "typedElement" };
function B(i, e, t, s, n, o) {
  return f(), g("div", P, [
    m(i.$slots, "default")
  ], 512);
}
const w = /* @__PURE__ */ T(S, [["render", B]]), I = {
  install: (i) => {
    i.component("VueTyped", w);
  }
};
export {
  I as default
};
