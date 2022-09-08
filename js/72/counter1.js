window.app = window.app || {};
window.app.counter1 = (function (/*tm*/) {
  'use strict';

  let i = 0;

  return {
    increment: () => ++i,
    getCount: () => i
  };
  //tm.increment = () => ++i;
  //tm.getCount = () => i;
  //return tm;
}) (/*window.app.counter1 || {}*/);