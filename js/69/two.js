//let x = 5;
//x = 6;

//let potus = { name: 'Joe Biden' };
//let origPotus = potus;
//potus = {name: 'Donald Trump'};
//console.log(potus); // , origPotus);

window.app = (function (theModule) {
  'use strict';

  /*return {
    c: () => console.log('c called'),
    d: () => console.log('d called')
  };*/

  theModule.c = () => console.log('c called');
  theModule.d = () => console.log('d called');

  // theModule.a = () => console.log('two a called');

  return theModule;
}(window.app || {}));

window.app.c();
window.app.d();