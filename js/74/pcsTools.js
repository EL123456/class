window.app = window.app || {};
window.app.pcsTools = (function () {
  'use strict';
  
  function get(selector) {
    return document.querySelector(selector);
  }

  function setCss(elem, property, value) {
    elem.style[property] = value;
  }

  return {
    get: get,
    setCss: setCss
  };
})();