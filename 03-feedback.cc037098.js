!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l,n,i,u=e(o("1WSnx")),s={},f=localStorage.getItem("feedback-form-state"),m={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),message:document.querySelector("textarea")};if(f){var d=JSON.parse(f);n=(l=d).email,i=l.message,m.email.value=n,m.message.value=i,s.email=n,s.message=i}m.form.addEventListener("input",u.throttle((function(e){var t=e.target.getAttribute("name");"email"===t&&(s.email=e.target.value),"message"===t&&(s.message=e.target.value),formObjValues=JSON.stringify(s),localStorage.setItem("feedback-form-state",formObjValues)}),500)),m.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(s),m.email.value="",m.message.value="",localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.cc037098.js.map
