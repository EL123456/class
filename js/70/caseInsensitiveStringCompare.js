window.myApp = window.myApp || {};

window.myApp.utils = (function (myModule, theAlert) {
  'use strict';

  myModule.caseInsensitiveCompare = function (a, b) {
    return a.toLowerCase() === b.toLowerCase();
  };

  myModule.show = msg => theAlert(msg);

  return myModule;
}(window.myApp.utils || {}, /*alert*/msg => console.log(msg)));

console.log('window.myApp.utils.caseInsensitiveCompare("Joe", "JoE")', window.myApp.utils.caseInsensitiveCompare('Joe', 'JoE'));
console.log('window.myApp.utils.caseInsensitiveCompare("Joey", "JoE")', window.myApp.utils.caseInsensitiveCompare('Joey', 'JoE'));