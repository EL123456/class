window.app = window.app || {};

window.app.views = (function (theModule) {
  'use strict';

  theModule.a = () => console.log('view a called');

  return theModule;
})(window.app.views || {});