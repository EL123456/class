window.app = window.app || {};

window.app.views = (function (theModule) {
  'use strict';

  theModule.b = () => console.log('view b called');

  return theModule;
})(window.app.views || {});