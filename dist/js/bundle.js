!function u(i,l,f){function c(r,e){if(!l[r]){if(!i[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(s)return s(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var o=l[r]={exports:{}};i[r][0].call(o.exports,function(e){return c(i[r][1][e]||e)},o,o.exports,u,i,l,f)}return l[r].exports}for(var s="function"==typeof require&&require,e=0;e<f.length;e++)c(f[e]);return c}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sayHello=void 0,t.sayHello=function(e){return"Hello from "+e}},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,u=e("./hello");n="greeting",o="TypeScript",document.getElementById(n).innerText=u.sayHello(o)},{"./hello":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map
